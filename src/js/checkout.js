import ExternalServices from "./ExternalServices.js";
import { loadHeaderFooter } from "./utils.js";
import CheckoutProcess from "./CheckoutProcess.js";
import { check } from "prettier";

loadHeaderFooter();

const checkout = new CheckoutProcess("so-cart", ".checkout-summary");
checkout.init();

document
  .querySelector("#zip")
  .addEventListener("blur", checkout.calculateOrdertotal.bind(checkout));
document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  checkout.checkout();
});

// checkoutButtonClicked();
