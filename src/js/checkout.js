import { loadHeaderFooter } from "./utils.js";
import CheckoutProcess from "./CheckoutProcess.js";

loadHeaderFooter();


const checkout = new CheckoutProcess("so-cart")
checkout.calcAndDisplaySubtotal()
checkout.calcAndDisplayShippingTaxOrderTotal()


