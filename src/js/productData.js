function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
}
let products = [];
export default class ProductData {
    constructor(category) {
        this.category = category
        this.path = `../json/${this.category}.json`
    }
      
    getProductsData() {
        fetch(this.path)
          .then(convertToJson)
          .then((t) => {
            products = t;
        });
    }

    findProductById(id) {
        products = this.getProductsData();
        return products.find((item) => item.Id === id);
    } 
}
