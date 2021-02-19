import ExternalServices from "./ExternalServices.js";
import { loadHeaderFooter } from "./utils.js";
import CheckoutProcess from "./CheckoutProcess.js";
import { check } from "prettier";

loadHeaderFooter();


const checkout = new CheckoutProcess("so-cart")

document.getElementById("checkout-form").addEventListener("submit", checkoutButtonClicked)
document.getElementById("zip").addEventListener("blur", checkout.calcAndDisplayShippingTaxOrderTotal)
document.getElementsByTagName("body").addEventListener("load", checkout.calcAndDisplaySubtotal())

function checkoutButtonClicked(ev){
    ev.preventDefault()
    checkout.callCheckout(ev.target)
}


loadHeaderFooter();
checkoutButtonClicked();
