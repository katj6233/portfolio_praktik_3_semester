// window.addEventListener("load", animation);

// function animation() {
//   const skelet = document.querySelector("body");

//   if (!sessionStorage.getItem("isLoaded")) {
//     skelet.classList.add("loaded");
//     sessionStorage.setItem("isLoaded", true);
//   } else {
//     skelet.classList.add("no-load");
//   }
// }

const body = document.querySelector("body");

window.addEventListener("load", animation);

function animation() {
  body.classList.add("loaded");
}
