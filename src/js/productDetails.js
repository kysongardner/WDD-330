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

  cartBadge() {
    let number = 0;
    let count = document.getElementById("cart-badge");
    let incrementor = document.getElementById("addToCart");
    incrementor.addEventListener("click", plusOne);

    function plusOne() {
      number++;
      count.textContent = number.toString();
    }
  }

  addToCart() {
    let productList = getLocalStorage("so-cart")
    if (!productList) {
      productList = []
    }
    productList.push(this.product)

    setLocalStorage("so-cart", productList);
  }

  displayTotalPrice(price) {
    const cartDIV = document.querySelector(".total-cart-price")
    let totalPrice = document.createElement("h2")
    totalPrice.innerHTML = "Total Price: " + price
    cartDIV.appendChild(totalPrice)

  }
  calculateTotalPrice() {
    let price = 0
    let productList = getLocalStorage("so-cart")
    for (const productPrice of productList.FinalPrice) {
      price = price + productPrice
    }
    this.displayTotalPrice(price)
  }

}
  renderProductDetails() {
    return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
        class="divider"
        src="${this.product.Images.PrimaryLarge}"
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
