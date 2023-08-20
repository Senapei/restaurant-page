import { initialPageLoad } from "./initialLoad.js";
import { getMenuPage } from "./menu.js";
import { getContactPage } from "./contact.js";
import "./styles.css";

const pageTabs = [
  { name: "initial", module: initialPageLoad },
  { name: "Menu", module: getMenuPage },
  { name: "Contact", module: getContactPage },
];

const updatePage = (e) => {
  container.textContent = "";
  addTabsToPage();
  pageTabs[e.target.getAttribute("data-attribute")].module();
};

const addTabsToPage = () => {
  for (let i = 0; i < pageTabs.length; i++) {
    const tab = document.createElement("button");
    tab.textContent = pageTabs[i].name;
    tab.classList.add("tabs");
    tab.setAttribute("data-attribute", i);
    tab.addEventListener("click", updatePage);
    container.appendChild(tab);
  }
};

const container = document.getElementById("content");
addTabsToPage();
initialPageLoad();
