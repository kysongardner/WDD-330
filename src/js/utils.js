// import { doc } from "prettier";

// wrapper for querySelector...returns matching element
export function qs(selector) {
  return document.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}
export function renderListWithTemplate(template, parentElement, list, callback){
  // const getTemplate = document.getElementById("product-card-template");
  list.forEach(product => {
    const clone = template.content.cloneNode(true);
    const hydratedTemplate = callback(clone, product);
    parentElement.appendChild(hydratedTemplate);
  })
}

export function renderWithTemplate(template, parentElement, data, callback){
  // const getTemplate = document.getElementById("product-card-template");
  
      let clone = template.content.cloneNode(true);
      if (callback) {
        clone = callback(clone, data);
      }
      parentElement.appendChild(clone);
}

export async function loadTemplate(path) { 
  const template = await fetch(path).then((response) => response.text())
  const templateElement = document.createElement("template");
  templateElement.innerHTML = template;
  return templateElement
}

export async function loadHeaderFooter() {
  const header = await loadTemplate("../partials/header.html");
  const footer = await loadTemplate("../partials/footer.html");
  const mainHeader = document.querySelector("#main-header");
  const mainFooter = document.querySelector("#main-footer");
  renderWithTemplate(header, mainHeader);
  renderWithTemplate(footer, mainFooter);

}