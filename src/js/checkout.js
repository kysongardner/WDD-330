import ExternalServices from "./ExternalServices.js";
import { loadHeaderFooter } from "./utils.js";

function checkoutButtonClicked(){
    // Prepare order data object
    const eS = ExternalServices()
    eS.checkout()
}


loadHeaderFooter();
checkoutButtonClicked();
