import { mount } from "products/ProductsIndex"; // consume mount component from product app
import { mount as mountcart } from "cart/CartShow";
console.log("constainer");

mount(document.querySelector("#my-products"));
mountcart(document.querySelector("#my-cart"));
