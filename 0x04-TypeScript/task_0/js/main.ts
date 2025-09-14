// 1️⃣ Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2️⃣ Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Mary",
  lastName: "Wanjiku",
  age: 24,
  location: "Mombasa",
};

// 3️⃣ Add them to an array
const studentsList: Student[] = [student1, student2];

// 4️⃣ Render table dynamically using Vanilla JS
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
