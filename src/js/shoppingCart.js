import { renderListWithTemplate, getLocalStorage } from "./utils.js"

export default class ShoppingCart {
    constructor(key, listElement) {
      this.key = key;
      this.listElement = listElement;
  
      
    }
    async init(){
        const list = getLocalStorage(this.key);
        this.renderList(list)
        
    }

    async renderList(list) {
      this.listElement.innerHTML = "";
      const template = document.getElementById("cart-card-template");
      renderListWithTemplate(template, this.listElement, list, this.prepareTemplate)
      const cartQty = list.length;
      document.querySelector("#cart-badge").innerHTML = cartQty;
    }
    
    prepareTemplate(templateClone, product){
      templateClone.querySelector(".cart-card__img > img").setAttribute("src", product.Image);
      templateClone.querySelector(".cart-card__img > img").setAttribute("alt", product.Name);
      templateClone.querySelector(".cart-card__color").innerHTML = product.Brand.Name;
      templateClone.querySelector(".cart-card__name").innerHTML = product.Colors[0].ColorName;
      templateClone.querySelector(".cart-card__price").innerHTML = product.FinalPrice;
      return templateClone;
    }
  }