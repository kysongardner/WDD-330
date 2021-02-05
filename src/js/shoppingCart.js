import { renderListWithTemplate, getLocalStorage } from "./utils.js"

export default class ProductList {
    constructor(key, listElement) {
      this.key = key;
      this.listElement = listElement;
  
      
    }
    async init(){
        const list = getLocalStorage(this.key);
        this.renderList(list)
    }

    renderList(list) {
      this.listElement.innerHTML = "";
      const template = document.getElementById("cart-card-template");
      renderListWithTemplate(template, this.listElement, list, this.prepareTemplate)
      }
    
    prepareTemplate(templateClone, product){
      templateClone.querySelector(".cart-card__img").setAttribute("src", product.Image);
      templateClone.querySelector(".cart-card__img").setAttribute("alt", product.Name);
      templateClone.querySelector(".cart-card__color").innerHTML = product.Brand.Name;
      templateClone.querySelector(".cart-card__name").innerHTML = product.Colors[0].ColorName;
      templateClone.querySelector(".cart-card__price").innerHTML = product.FinalPrice;
      return templateClone
    
    }
  }