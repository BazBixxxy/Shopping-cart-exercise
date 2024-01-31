const list = document.querySelector(".list");
const inputElement = document.querySelector(".input-element");
const addButton = document.querySelector(".add-item");

const items = [];

function addItem() {
  const inputItem = document.querySelector(".input-element").value;
  inputElement.value = "";
  //   const listContent = document.createElement("li");
  //   const span = document.createElement("span");
  //   const deleteButton = document.createElement("button");
  //   listContent.append(span);
  //   listContent.append(deleteButton);
  //   span.innerText = item;
  //   deleteButton.innerText = `Delete`;
  //   list.append(listContent);
  const item = (document.querySelector(".list").innerHTML += `
    <li>${inputItem}</li><button style = "margin-left = 10px">Delete</button>
    `);
  items.push(item);
  items.forEach((value) => {
    return value;
  });
}



addButton.addEventListener("click", () => {
  addItem();
});
