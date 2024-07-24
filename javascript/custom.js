//project js

import projectData from "../data/data.js";

let card = document.querySelector(".card-wrapper");
if (card != null) {

  function displayCards() {

    for (let item of projectData) {
      let makeCard = document.createElement("div");
      makeCard.className = "card";
      makeCard.innerHTML = `
          <h4>${item.title}</h4>
          <img src="${item.image}" alt="${item.imageAlt}">
          <p>${item.description}</p>
          <a href="${item.link}">View The Site</a>
          `
      document.querySelector(".card-wrapper").appendChild(makeCard);
    }
  }
  displayCards()

} 



console.log(projectData);


//js for toggle

const burgerbutton = document.querySelector("button.burger");
const burger = document.querySelector(".burger i");
console.log(burger);
const nav = document.querySelector(".nav");
console.log(nav);

function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("navactive");
}
burgerbutton.addEventListener("click", showHamburger)




//js for timebutton
const element = document.querySelector(".pinky");
const timeButton = document.querySelector("#timebutton");


if (timeButton != null) {
timeButton.addEventListener("click", myToggleFunction);
}
function myToggleFunction() {
  console.log("clicked");
  document.getElementById("pinky").classList.toggle("mystyle");
  myTime(); 
}
//myToggleFunction();



//time function to show time

function myTime() {
  const date = new Date();
  let time = date.toLocaleTimeString('en-US', {timeZone: "America/New_York"});
  let NYCTime = document.getElementById("NYCTime");
  NYCTime.textContent = time;
  console.log(NYCTime)
}




//form function for button
const form = document.getElementById("form");
//let userArray = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
  console.log("Hello");
	const data = new FormData(event.target);
  console.log("Hello2")
	const dataObject = Object.fromEntries(data.entries());

	//above is boiler plate code
  console.log(dataObject)
	//userArray.push(dataObject);
	form.reset();
}