import {getLocalStorage} from "../js/utils.js"
export default class ChekcoutProcess {
    constructor(key){
        this.key = key
        this.itemTotal = 0
        this.list = getLocalStorage(this.key);
    }

    calcAndDisplaySubtotal(){
        let subtotalPrice = 0
      console.log(this.list)
      for (let index = 0; index < this.list.length; index++) {
        console.log(this.list[index].FinalPrice)
        subtotalPrice += this.list[index].FinalPrice.value

        let subtotal = document.querySelector("#item-subtotal")
        subtotal.textContent = subtotal + "(" + index + ")" + subtotalPrice
      }

      

       

    }
    calcAndDisplayShippingTaxOrderTotal(){
        // if items == 1 then shipping = $10
        // for each item shipping += 2
        // for each item tax = 0.06
        // for each item subtotal = item value + shipping * tax

        let shippingEstimate = document.querySelector("#shipping-estimate")
        let tax = document.querySelector("#tax")
        let orderTotal = document.querySelector("#order-total")
    }
    
}