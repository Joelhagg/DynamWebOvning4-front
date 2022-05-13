window.addEventListener("load", async () => {
  let adresses = await fetch("http://localhost:3000/api/adress");

  console.log(adresses);
});

const btn = document.getElementById("btn");
const renderdAdresses = document.getElementById("renderdAdresses");
const myName = document.getElementById("name");
const streetname = document.getElementById("streetName");
const streetNumber = document.getElementById("streetNumber");
const mail = document.getElementById("mail");

document.getElementById("btn").addEventListener("click", () => {
  console.log("click");
});
