/// string遍历
const str = "hello world";
for (let s of str) {
  console.log(s);
}

/// array遍历
const array = [233, "hello", true]
for (let value of array) {
  console.log(value)
}

/// set遍历
const fruits = new Set(["apple", "pear", "mango", "apple"])
for (let fruit of fruits) {
  console.log(fruit);
}

/// map遍历
const map = new Map();
map.set("a", 90);
map.set("b", "80");
map.set("c", "70");
map.set(Symbol("d"), "60");
for (let item of map) {
  console.log(`${item[0].toString()} = ${item[1]}`);
}


