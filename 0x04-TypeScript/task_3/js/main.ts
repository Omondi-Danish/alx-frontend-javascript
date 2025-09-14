// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Step 1: Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Step 2: Insert the row and capture returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Step 3: Create an updated row with age added
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Step 4: Update row with new data
CRUD.updateRow(newRowID, updatedRow);

// Step 5: Delete the row
CRUD.deleteRow(newRowID);
