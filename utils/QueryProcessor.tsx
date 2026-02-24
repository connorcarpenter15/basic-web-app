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

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      // Assuming the format is always "What is X minus Y?"
      const result = parseInt(numbers[0]) - parseInt(numbers[1]);
      return result.toString();
    }
  }

  if (query.toLowerCase().includes("power of")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      // Using BigInt ensures accurate calculations for very large results
      const base = BigInt(numbers[0]);
      const exponent = BigInt(numbers[1]);
      const result = base ** exponent;
      return result.toString();
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

  if (query.toLowerCase().includes("primes")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      // Helper function to check if a number is prime
      const isPrime = (num: number) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };

      const matches = numbers.filter((n) => isPrime(parseInt(n)));
      return matches.join(", ");
    }
  }

  return "";
}
