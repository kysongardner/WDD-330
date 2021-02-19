const baseURL = "http://157.201.228.93:2992/"
function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
}

export default class ExternalServices {
    constructor() {
    }
      
    getProductsData(category) {
      return fetch(baseURL + `products/search/${category}`)
        .then(convertToJson).then((data) => data.Result);
    }

    async findProductById(id) {
        const products = await fetch(baseURL + `product/${id}`).then(convertToJson)
        return products.Result
    }

    // cartBadge() {
    //   let number = 0;
    //   let count = document.getElementById("cart-badge");
    //   let incrementor = document.getElementById("addToCart");
    //   incrementor.addEventListener("click", plusOne);
    // }
      // plusOne() {
      //   number++;
      //   count.textContent = number.toString();
      // }
    
      checkout(order){
        return fetch(baseURL + "checkout")
      }
    
}
