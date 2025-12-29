// let promiseOne = new Promise(function (response, reject) {
//   setTimeout(() => {
//     // console.log("I am the first Promise");
//     let data = "Shanu";
//     if (true) {
//       response(data);
//     } else {
//       reject("Please try again after some time");
//     }
//   }, 1000);
// });

// console.log(promiseOne);

// promiseOne
//   .then(function (hariData) {
//     console.log("Promise got resolved");
//     console.log(hariData);
//     return "Shanu is a good boy!!";
//   })
//   .then((data) => {
//     console.log(data);
//     return "Logeshwari";
//   })
//   .then((logi) => {
//     console.log(logi);
//   })
//   .catch(function (err) {
//     console.log("Promise got rejected!! Please try after some time");
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("Finally your promise got rejected or resolved");
//   });

// fetch("https://fakestreapi.com/products")
//   .then((res) => {
//     if (!res.ok) {
//       console.log("Error");
//     } else {
//       return res.json();
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     // console.log(`Error: ${err.}`);
//     console.log(err);
//   });

let fetchData = async function () {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    //console.log(data.json());
    let finaldata = await data.json();
    console.log(finaldata);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
