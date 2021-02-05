import {
  getLocalStorage,
  setLocalStorage,
  loadHeaderFooter
} from "./utils.js";

loadHeaderFooter();
export default class ProductData {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    // once we have the product details we can render out the HTML
    // once the html is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector("main").innerHTML = this.renderProductDetails();
    document.getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {

    // create list
    // check list to see if their are items in it
    // add the new item to the list
    // get the local storage as a starting point
    // add new item to the end of the list
    // push it back out to local storage


    let productList = getLocalStorage("so-cart")
    if (!productList) {
      productList = []
    }
    productList.push(this.product)

    setLocalStorage("so-cart", productList);
  }

  renderProductDetails() {
    console.log(this.product)
    return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
        class="divider"
        src="${this.product.Image}"
        alt="${this.product.NameWithoutBrand}"
        />
        <p class="product-card__price">$${this.product.FinalPrice}</p>
        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">
        ${this.product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
        <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
        </div></section>`;
  }
}
