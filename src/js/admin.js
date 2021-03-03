import { loadHeaderFooter, getLocalStorage } from "./utils.js";
import ExternalServices from "./ExternalServices.js";

loadHeaderFooter();

export default class Admin {
  constructor(outputSelector) {
    this.mainElement = document.querySelector(outputSelector);
    this.token = null;
    this.services = new ExternalServices();
  }
  showLogin() {
    let section = document.createElement("section");
    let form = document.createElement("form");
    let fieldSet = document.createElement("fieldset");
    let legend = document.createElement("legend");

    let emailLabel = document.createElement("label");
    let email = document.createElement("input");

    let passwordLabel = document.createElement("label");
    let password = document.createElement("input");

    let submitButton = document.createElement("input");

    emailLabel.innerHTML = "Email: ";
    passwordLabel.innerHTML = "Password: ";

    email.setAttribute("type", "email");
    password.setAttribute("type", "password");

    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("value", "Login");

    section.appendChild(form);
    form.appendChild(fieldSet);
    fieldSet.appendChild(legend);
    fieldSet.appendChild(emailLabel);
    fieldSet.appendChild(email);
    fieldSet.appendChild(passwordLabel);
    fieldSet.appendChild(password);
    section.appendChild(submitButton);

    let adminForm = document.querySelector("#admin-form");
    adminForm.appendChild(section);

    submitButton.addEventListener("click", () => {
      this.login({ email: email.value, password: password.value }, () => {
<<<<<<< HEAD
        this.showOrders();
      })
=======
      }),
        this.services.orders(this.token);
>>>>>>> 6d75c881c6148b8e7e19fe8675a3988315573155
    });
  }
  async login(creds, next) {
    // I built the login method with a callback: next.
    // This makes it much more flexible...
    // there could be many different things the user wants to do after logging in...
    // this allows us that flexibility without having to write a bunch of login methods
    try {
      this.token = await this.services.loginRequest(creds);
      next();
    } catch (err) {
      // remember this from before?
      // alert(err.message.message);
    }
  }

  async showOrders() {
    try {
<<<<<<< HEAD
      const orders = await this.services.orders(this.token);
      this.mainElement.innerHTML = orderHtml();
      const parent = document.querySelector("#orders tbody");
      // why not a template like we have done before?  The markup here was simple enough that I didn't think it worth the overhead...but a template would certainly work!
      parent.innerHTML = orders.map(order=> `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString("en-US")}</td><td>${order.items ? order.items.length : 0}</td><td>${order.orderTotal}</td></tr>`).join("");
=======
      const orders = await this.services.getOrders(this.token);
      this.mainElement.innerHTML = orderHtml();
      const parent = document.querySelector("#orders tbody");
      // why not a template like we have done before?  The markup here was simple enough that I didn't think it worth the overhead...but a template would certainly work!
      parent.innerHTML = orders.map(order=> `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString("en-US")}</td><td>${order.items.length}</td><td>${order.orderTotal}</td></tr>`).join("");
>>>>>>> 6d75c881c6148b8e7e19fe8675a3988315573155
    } catch(err) {
      console.log(err);
    }
  }
}

function orderHtml() {
  return `<h2>Current Orders</h2>
  <table id="orders">
  <thead>
  <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
  </thead>
  <tbody class="order-body"></tbody>
  </table>
  `;
}
