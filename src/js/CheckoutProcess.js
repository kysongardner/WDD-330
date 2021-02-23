import { getLocalStorage } from "../js/utils.js";
import ExternalServices from "./ExternalServices.js";

const services = new ExternalServices();

// export default class ChekcoutProcess {
//     constructor(key, outputSelector){
//         this.key = key
//         this.itemTotal = 0;
//         this.list = getLocalStorage(this.key);
//         this.subtotalPrice = 0
//         this.shippingEstimate = document.querySelector("#shipping-estimate").value
//         this.tax = document.querySelector("#tax").value
//         this.orderTotal = document.querySelector("#order-total").value
//     }

//     calcAndDisplaySubtotal(){
//       // console.log(this.list)
//       // for (let index = 0; index < this.list.length; index++) {
//       //   console.log(this.list[index].FinalPrice)
//       //   this.subtotalPrice += this.list[index].FinalPrice.value

//       //   let subtotal = this.subtotalPrice
//       //   subtotal.textContent = subtotal + "(" + index + ")" + this.subtotalPrice

//       const summaryElement = document.querySelector(this.outputSelector + " #cartTotal");
//       const itemNumElement = document.querySelector(this.outputSelector + " #num-items");
//       itemNumElement.innerText = getLocalStorage(this.key).length;
//       // calculate the total of all the items in the cart
//       const amounts = this.list.map((item) => item.FinalPrice);
//         this.subtotalPrice = amounts.reduce((sum, item) => sum + item);
//         summaryElement.innerText = "$" + this.itemTotal;
//       }

//     calcAndDisplayShippingTaxOrderTotal(listOfData){
//         // use this.shippingEstimate
//         // this.tax
//         // this.orderTotal

//         // How do we get the data here as a parameter???
//         // get object data as a parameter
//         // iterate through it . . .
//         // if items == 1 then shipping = $10
//         // for each item shipping += 2
//         // for each item tax = 0.06
//         // for each item subtotal = item value + shipping * tax
//     }

//     callCheckout(formData){
//       const formInfo = new FormData(formData)
//       const converted = Object.fromEntries(formInfo.entries())
//       console.log(converted)
//       eS.checkout()

//     }

// }

function formDataToJSON(formElement) {
  var formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }
  init() {
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }
  calculateItemSummary() {
    const summaryElement = document.querySelector("#cartTotal");
    const itemNumElement = document.querySelector("#num-items");
    itemNumElement.innerText = this.list.length;
    // calculate the total of all the items in the cart
    const amounts = this.list.map((item) => item.FinalPrice);
    this.itemTotal = amounts.reduce((sum, item) => sum + item);
    summaryElement.innerText = "$" + this.itemTotal;
  }
  calculateOrdertotal() {
    this.shipping = 10 + (this.list.length - 1) * 2;
    this.tax = (this.itemTotal * 0.06).toFixed(2);
    this.orderTotal = (
      parseFloat(this.itemTotal) +
      parseFloat(this.shipping) +
      parseFloat(this.tax)
    ).toFixed(2);
    this.displayOrderTotals();
  }
  displayOrderTotals() {
    const shipping = document.querySelector(this.outputSelector + " #shipping");
    const tax = document.querySelector(this.outputSelector + " #tax");
    const orderTotal = document.querySelector(
      this.outputSelector + " #orderTotal"
    );
    shipping.innerText = "$" + this.shipping;
    tax.innerText = "$" + this.tax;
    orderTotal.innerText = "$" + this.orderTotal;
  }

  async checkout() {
    var formElement = document.querySelector("form");

    const json = formDataToJSON(formElement);
    // add totals, and item details
    json.orderDate = new Date();
    json.orderTotal = this.orderTotal;
    json.tax = this.tax;
    json.shipping = this.shipping;
    json.items = packageItems(this.list);
    console.log(json);
    try {
      const res = await services.checkout(json);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}
