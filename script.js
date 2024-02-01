const cart = [];

function addToCart() {
  const inputElement = document.querySelector(".input-element");
  const inputValue = inputElement.value;
  cart.push({
    name: inputValue,
  });
  inputElement.value = "";
  renderCart();
}

function renderCart() {
  let cartHTML = "";
  cart.forEach((item, index) => {
    const name = item.name;
    const html = `
    <div>${name}</div>
    <button onclick = "
    cart.splice(${index}, 1);
    renderCart();
    ">Delete</button>
    `;
    cartHTML += html;
  });
  document.querySelector(".display").innerHTML = cartHTML;
}

document.querySelector(".add-item").addEventListener("click", () => {
  addToCart();
});
