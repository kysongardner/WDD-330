import ExternalServices from "./ExternalServices.js";
import ProductDetails from "./productDetails.js";
import { getParams } from "./utils.js";

const dataSource = new ExternalServices("tents");
const productId = getParams("product");
const product = new ProductDetails(productId, dataSource);
product.init();
