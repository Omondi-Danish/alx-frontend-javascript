// ✅ Define branded types for MajorCredits and MinorCredits
export interface MajorCredits {
  credits: number;
  __brand: "MajorCredits"; // Unique brand property
}

export interface MinorCredits {
  credits: number;
  __brand: "MinorCredits"; // Unique brand property
}

// ✅ Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

// ✅ Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}

// ✅ Example usage (to test)
const major1: MajorCredits = { credits: 3, __brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, __brand: "MajorCredits" };

const minor1: MinorCredits = { credits: 2, __brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 1, __brand: "MinorCredits" };

console.log("Total Major Credits:", sumMajorCredits(major1, major2).credits);
console.log("Total Minor Credits:", sumMinorCredits(minor1, minor2).credits);
