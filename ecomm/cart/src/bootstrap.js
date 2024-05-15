import faker from "faker";

console.log("Cart");

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;
  el.innerHTML = cartText;
};
if (process.env.NODE_ENV === "Development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}
export { mount };
