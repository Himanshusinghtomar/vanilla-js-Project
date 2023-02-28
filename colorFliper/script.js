// const query = document.querySelector(".d");
// a = "firstName";


// const user = {
//   firstName: "himanshu",
//   lastName: "singh",
//   age: 13,
//   city: "Bangalore",
//   address:{
//     city: 'purnea',
//     pincode: 854301,
//   }
// };

// const array = ['Apple','Banana','Dates',]

// query.innerHTML = `<h1>Hello ${user.firstName}</h1>
// <h2>${user.address}</h2>
// <h2>${user.lastName}</h2>
// <h3>${user[a]}</h3>
// `;

const ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("button")
const back = document.querySelector("body")

btn.addEventListener("click",bgChange)

function bgChange()
{
  
  
  let hex = '#'
  for (let index = 0; index < 6; index++) {
    hex += ar[getRandomColor()]
  }
  console.log(hex)
  
  back.style.backgroundColor = hex;
}

function getRandomColor()
{
  
  return Math.floor(Math.random() * ar.length);
}

