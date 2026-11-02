'use strict';

console.log("executing other.js");

const peopleArray = ["John", "Paul", "George", "Ringo"];
console.log(peopleArray);

export default function getFullName(person) {
  const {first, last} = person;

  return first + " " + last;
}

export function sayHello(name) {
  console.log("hello", name);
}
