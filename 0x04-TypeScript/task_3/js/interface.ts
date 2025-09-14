// task_3/js/interface.ts

// Define a type alias RowID
export type RowID = number;

// Define an interface RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional
}
