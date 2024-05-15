import faker from "faker";

const mount = (el) => {
  let products = "";
  for (let i = 0; i < 50; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};
// Context/Situation #1
// we are running this file in development in isolation
// we are using our local index.html file
// which defnitly has an element with an id of 'dev-products'
// we want to inmmediately render our app into that element

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  // Assunming our contianer doesnt have an element with id 'dev-products'
  if (el) {
    // we are probably running in isolation
    mount(el);
  }
}

export { mount };
