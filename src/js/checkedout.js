import { loadHeaderFooter, getLocalStorage, setLocalStorage } from "./utils.js";

const myArray = []
loadHeaderFooter();
getLocalStorage("so-cart");
setLocalStorage("so-cart", myArray);