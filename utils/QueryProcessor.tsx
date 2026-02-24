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
      const sum = numbers.reduce((a, b) => a * parseInt(b), 0);
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

  return "";
}
