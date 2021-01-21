
export default class ProductData {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
        console.log(dataSource);
    }

    async init() {
        // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        // once we have the product details we can render out the HTML
        // once the html is rendered we can add a listener to Add to Cart button
        // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
        document.getElementById("addToCart")
                .addEventListener("click", this.addToCart.bind(this));
    }

    addToCart(t) {
        const e = products.find((n) => n.Id === t.target.dataset.id);
        setLocalStorage("so-cart", e);
    }
    
    renderProductDetails() {

    }
}
