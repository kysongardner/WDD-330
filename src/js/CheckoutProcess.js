import {getLocalStorage} from "../js/utils.js"
import ExternalServices from "./ExternalServices.js";

const eS = new ExternalServices()

export default class ChekcoutProcess {
    constructor(key){
        this.key = key
        this.itemTotal = 0
        this.list = getLocalStorage(this.key);
        this.subtotalPrice = 0
        this.shippingEstimate = document.querySelector("#shipping-estimate").value
        this.tax = document.querySelector("#tax").value
        this.orderTotal = document.querySelector("#order-total").value
    }

    calcAndDisplaySubtotal(){
      console.log(this.list)
      for (let index = 0; index < this.list.length; index++) {
        console.log(this.list[index].FinalPrice)
        this.subtotalPrice += this.list[index].FinalPrice.value

        let subtotal = document.querySelector("#item-subtotal")
        subtotal.textContent = subtotal + "(" + index + ")" + this.subtotalPrice
      }

    }
    calcAndDisplayShippingTaxOrderTotal(listOfData){
        // use this.shippingEstimate
        // this.tax
        // this.orderTotal
        
        // How do we get the data here as a parameter???
        // get object data as a parameter
        // iterate through it . . .
        // if items == 1 then shipping = $10
        // for each item shipping += 2
        // for each item tax = 0.06
        // for each item subtotal = item value + shipping * tax
    }

    callCheckout(formData){
      const formInfo = new FormData(formData)
      const converted = Object.fromEntries(formInfo.entries())
      console.log(converted)
      eS.checkout()

    }
    
}