const getContactPage = () => {
  const container = document.getElementById("content");

  //create element
  const heading = document.createElement("h1");
  const description = document.createElement("p");

  //add content to the elements
  heading.textContent = "CornKnee Contact Page";
  description.textContent = "Contact is: 32142352";

  //appending newly created elements to the DOM
  container.appendChild(heading);
  container.appendChild(description);
};

export { getContactPage };
