const array = ["Dance", "Cook", "Walk Reggy"];

const li = document.querySelectorAll("li");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const list = document.querySelector(".list");

for (let i = 0; i < array.length; i++) {
  li[i].innerHTML = array[i];
}

add.addEventListener("click", function () {
  if (array.length < "5") {
    add.disabled = false;
    let value = document.querySelector("#todo").value;
    array.push(value);
    let newLi = document.createElement("li");
    let liContent = document.createTextNode(value);
    newLi.appendChild(liContent);
    list.appendChild(newLi);
    document.querySelector("#todo").value = "";
  } else if (array.length === "5") {
    add.disabled = true;
  }
});

remove.addEventListener("click", function () {
  list.removeChild(list.childNodes[0]);

  array.pop();
});
