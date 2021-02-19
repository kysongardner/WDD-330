import ExternalServices from "./ExternalServices.js"
import ProductList from "./productList.js"
import { getParams } from "./utils.js"
import { loadHeaderFooter } from "./utils.js"

loadHeaderFooter()

const category = getParams("category")
const dataSource = new ExternalServices()
const listElement = document.querySelector(".product-list")


let productList = new ProductList(category, dataSource, listElement)
productList.init()
