const ul = document.querySelector("ul"),
  input = ul.querySelector("input"),
  removeEl = ul.querySelector(".fa-xmark");

const removeBtn = document.querySelector("button");

let tags = [];

function creatTag() {
  ul.querySelectorAll("li").forEach((li) => li.remove());

  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      let liTag = `<li>${tag} <i class="fa-solid fa-xmark"></i></li>`;
      ul.insertAdjacentHTML("afterbegin", liTag);
    });
}

function addTag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (tag.length > 1 && !tags.includes(tag)) {
      tag.split(",").forEach((tag) => {
        tags.push(tag);
        creatTag();
      });
    }
    e.target.value = "";
  }
}

input.addEventListener("keyup", addTag);

removeBtn.addEventListener("click", () => {
  tags.length = 0;
  ul.querySelectorAll("li").forEach((li) => li.remove());
});
