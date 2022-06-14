const open = document.querySelectorAll(".open");
const close = document.querySelectorAll(".menu__nav");
const body = document.querySelector("body");
const text = document.querySelectorAll(".menu__nav--tag");
const arrow = document.querySelectorAll(".under__bar img");

for (let i = 0; i < open.length; i++) {
  open[i].addEventListener("click", function () {
    if (close[i].classList.contains("show")) {
      remover(close, "show");
      remover(text, "show");
      remover(arrow, "rotate");
    } else {
      remover(close, "show");
      remover(text, "show");
      remover(arrow, "rotate");
      close[i].classList.toggle("show");
      text[i].classList.toggle("show");
      arrow[i].classList.toggle("rotate");
    }
  });
}

function remover(up, down) {
  for (let i = 0; i < up.length; i++) {
    up[i].classList.remove(down);
  }
}
