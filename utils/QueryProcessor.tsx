export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (
    query.toLowerCase().includes("andrew id") ||
    query.toLowerCase().includes("andrewid")
  ) {
    return "ccarpent";
  }

  if (query.toLowerCase().includes("name")) {
    return "ccarpent";
  }

  if (query.toLowerCase().includes("plus")) {
    // Find numbers
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const sum = numbers.reduce((a, b) => a + parseInt(b), 0);
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    // Find numbers
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const sum = numbers.reduce((a, b) => a * parseInt(b), 1);
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("largest")) {
    // Find numbers
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const sum = numbers.reduce(
        (a, b) => Math.max(a, parseInt(b)),
        Number.NEGATIVE_INFINITY,
      );
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("both a square and a cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const matches = numbers.filter((n) => {
        const num = parseInt(n);
        // Using Math.round helps avoid floating point precision errors
        const isSquare = Math.round(Math.sqrt(num)) ** 2 === num;
        const isCube = Math.round(Math.cbrt(num)) ** 3 === num;
        return isSquare && isCube;
      });
      return matches.join(", ");
    }
  }

  return "";
}
