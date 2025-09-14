/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Step 1: Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Step 2: Insert the row and store the returned ID
const newRowID: RowID = CRUD.insertRow(row);

// Step 3: Create an updated row using object spread syntax
const updatedRow: RowElement = { ...row, age: 23 };

// Step 4: Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
