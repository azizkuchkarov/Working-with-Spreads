const number = [1, 2, 3];
function first(x, y, z) {
  console.log(x + y + z);
}
first(...number);

const newArr = ["x", "y"];
const secondArr = [...newArr];
console.log(secondArr);

const numbers = {
  x: 10,
  y: 15,
};
const numbers77 = { ...numbers };
numbers77.x = 20;
console.log(numbers);
console.log(numbers77);
