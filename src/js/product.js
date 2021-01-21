import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import { getParams } from "./utils.js";

const productId = getParams("product");
const dataSource = new ProductData("tents");

let product = new ProductDetails(productId, dataSource);
product.init();

// add to cart button event handler
function addToCart(e) {
  product = products.find((item) => item.Id === e.target.dataset.id);
  setLocalStorage("so-cart", product);
}

function getProductsData(){
// add listener to Add to Cart button
  document.getElementById("addToCart").addEventListener("click", addToCart);
}
