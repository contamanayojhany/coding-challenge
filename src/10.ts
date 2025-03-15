interface Student {
  name: string;
  age: number;
}

function getStudent(students: Student[], name: string): Student | undefined {
  return students.find((student) => student.name === name);
}

const students = [
  { name: "Alice", age: 12 },
  { name: "Bob", age: 10 },
  { name: "Charlie", age: 15 }
];

console.log(getStudent(students, "Bob")); // Output: { name: "Bob", age: 10 }
