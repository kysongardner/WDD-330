const baseURL = "http://157.201.228.93:2992/"
function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
}

export default class ProductData {
    constructor() {
    }
      
    getProductsData(category) {
      return fetch(baseURL + `products/search/${category}`)
        .then(convertToJson).then((data) => data.Result);
    }

    async findProductById(id) {
        const products = await this.getProductsData(baseURL + `product/${id}`);
        return products.find((item) => item.Id === id);
    }
}
