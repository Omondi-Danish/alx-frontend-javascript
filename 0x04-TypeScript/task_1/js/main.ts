// Define Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Define Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Define printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Director = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'Nairobi',
  fullTimeEmployee: true,
  numberOfReports: 12,
};

console.log(director1);
console.log(printTeacher('John', 'Doe')); // Output: John. Doe
