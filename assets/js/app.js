function onScroll() {
  if (scrollY > 677) {
    voltarParaOMenu.classList.add("back-to-top");
  } else {
    voltarParaOMenu.classList.remove("back-to-top");
  }
}

let voltarParaOMenu = document.getElementById("back-to-top");
