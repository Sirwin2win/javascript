const foods = ["Rice", "Beans", "Garri", "Yam", "Bread"];
for (f of foods) {
  console.log(f);
}
const students = {
  id: 1,
  name: "John Doe",
  email: "johndoe@gmail.com",
};
for (student in students) {
  console.log(`${student}=> ${students[student]}`);
}
console.log(students["id"]);
console.log(students["name"]);
console.log(students["email"]);
