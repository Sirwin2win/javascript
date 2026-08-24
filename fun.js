const name1 = "Mr. Segun";
const salut = function (n) {
  //   return "Good day, " + n + " Have a lovely day"; Concatination
  return `Good day ${n}, Have a lovely day`; // Interpolation
};
console.log(salut(name1));
console.log(salut("Mr. Godwin"));
const intro = function (name, address, phone, email) {
  return `My name is ${name}, I live in ${address}. You can contact me on ${phone} or ${email}`;
};
console.log(
  intro(
    "Sirwin",
    "No 1 Sirwin Ave, Abuja",
    +2347068939304,
    "sirwin2win@gmail.com",
  ),
);
