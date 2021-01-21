import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import { getParams } from "./utils.js";

const productId = getParams("product");
const dataSource = new ProductData("tents");

let product = new ProductDetails(productId, dataSource);
product.init();

// function getProductsData(){
// // add listener to Add to Cart button
//   document.getElementById("addToCart").addEventListener("click", addToCart);
// }
