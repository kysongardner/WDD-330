import ExternalServices from "./ExternalServices.js";
import { loadHeaderFooter } from "./utils.js";
import CheckoutProcess from "./CheckoutProcess.js";

loadHeaderFooter();


const checkout = new CheckoutProcess("so-cart")
checkout.calcAndDisplaySubtotal()
checkout.calcAndDisplayShippingTaxOrderTotal()


<<<<<<< HEAD
function checkoutButtonClicked(){
    // Prepare order data object
    const eS = ExternalServices()
    eS.checkout()
}


loadHeaderFooter();
checkoutButtonClicked();
=======
>>>>>>> 1d24487a6341d6881cefcba38eb0a400f866809d
