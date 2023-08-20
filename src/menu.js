const getMenuPage = () => {
  const container = document.getElementById("content");

  //create element
  const heading = document.createElement("h1");
  const description = document.createElement("p");

  //add content to the elements
  heading.textContent = "CornKnee Menu";
  description.textContent =
    "cheese corn dog, sausage corn dog, potato corn dog, squid dog";

  //appending newly created elements to the DOM
  container.appendChild(heading);
  container.appendChild(description);
};

export { getMenuPage };
