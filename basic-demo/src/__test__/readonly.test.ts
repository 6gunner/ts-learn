type Person = {
  name: string,
  age: number
}

type ReadonlyPerson = Readonly<Person>

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
// readonlyPerson.age++;