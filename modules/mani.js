//! Array Destructuring
let arr = ["Chennai", "Coimbatore", ["a", "b"], "Ramnad", "Erode"];

// import { Mygrains } from "./sudha";
// console.log(arr[1]);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[3]);

// let [Mycity, anotherCity, [jai, babu] = thala, any] = arr;

// console.log(jai);

//! Object destructuring
// let obj = {
//   username: "Mani",
//   age: 21,
//   address: {
//     village: "kilamba",
//     street: "6b Main road house no 2",
//   },
// };

// console.log(obj.address.street);

// let {
//   username,
//   age,
//   address: { village, street },
// } = obj;
// console.log(village);

//! Modules

//? Default Export and Import
import { Mygrains } from "./sudha.js";
// console.log(home);
// let [maniFarm, maniFun] = home;
// console.log(maniFarm);
// console.log(maniFun());
console.log(Mygrains());
