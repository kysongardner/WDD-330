const baseURL = "http://157.201.228.93:2992/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    let jsonResponse = res.json();
    throw { name: "servicesError", message: jsonResponse};
  }
}

export default class ExternalServices {
  constructor() {}

  getProductsData(category) {
    return fetch(baseURL + `products/search/${category}`)
      .then(convertToJson)
      .then((data) => data.Result);
  }

  async findProductById(id) {
    return await fetch(baseURL + `product/${id}`)
      .then(convertToJson)
      .then((data) => data.Result);
  }

  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }

  async loginRequest(creds) {
    const login = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    };
    const response = await fetch(baseURL + "login", login).then(convertToJson);
    return response.accessToken;
  }

  async orders(token) {
    const options = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    };
    const response = await fetch(baseURL + "orders", options).then(convertToJson);
    return response;
  }
}
