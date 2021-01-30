import ProductData from "./productData.js"
import ProductList from "./productList.js"
import { getParams } from "./utils.js"

const productId = getParams("product");
const dataSource = new ProductData("tents")
const listElement = document.querySelector(".product-list")

let productList = new ProductList(productId, dataSource, listElement)
productList.init()