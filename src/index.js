import cornDogImage from "./corndog.jpg";

const container = document.getElementById("content");

//create element
const heading = document.createElement("h1");
const foodImage = document.createElement("img");
const description = document.createElement("p");

//add content to the elements
heading.textContent = "CornKnee";
foodImage.src = cornDogImage;
description.textContent =
  "Embark on a delightful journey at our Korean corn dog haven. Experience the allure of traditional flavors blended with modern flair, where each bite unveils a delectable surprise. Our menu boasts an array of indulgent options, crafting a harmonious symphony of taste and texture that's irresistibly unforgettable.";

//appending newly created elements to the DOM
container.appendChild(heading);
container.appendChild(foodImage);
container.appendChild(description);
