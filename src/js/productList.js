import { renderListWithTemplate } from "./utils.js"

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category
    this.dataSource = dataSource
    this.listElement = listElement

    
  }
  async init(){
      const list = await this.dataSource.getProductsData(this.category)
      this.renderList(list)
  }
  renderList(list) {
    this.listElement.innerHTML = ""
    const template = document.getElementById("product-card-template");
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate)
    }
  
  prepareTemplate(templateClone, product){
    templateClone.querySelector(".card__img").setAttribute("src", product.Images.PrimaryMedium)
    templateClone.querySelector(".card__brand").innerHTML = product.Brand.Name
    templateClone.querySelector(".card__name").innerHTML = product.NameWithoutBrand
    templateClone.querySelector(".product-card__price").innerHTML = product.ListPrice
    templateClone.querySelector("a").href += product.Id
    return templateClone
  
  }
  filterProducts(list) {
    const tents = ["880RR", "985RF", "985PR", "344YJ"]
    return list.filter(item => tents.indexOf(item.Id) >= 0)

  }
}
