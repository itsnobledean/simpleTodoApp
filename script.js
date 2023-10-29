const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("#task");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
