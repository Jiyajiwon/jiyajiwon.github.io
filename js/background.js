const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const btn = document.querySelector("#color_button");
const body = document.querySelector("body");

body.style.background = `linear-gradient(to bottom right,rgb(29, 122, 184),rgb(255, 111, 195))`;

function handleBtn() {
  const color1 = colors[Math.floor(Math.random() * (colors.length - 1))];
  const color2 = colors[Math.floor(Math.random() * (colors.length - 1))];
  const color3 = colors[Math.floor(Math.random() * (colors.length - 1))];

  body.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
  btn.style.color = `${color3}`;
}

btn.addEventListener("click", handleBtn);
