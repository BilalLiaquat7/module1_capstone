const hamburger = document.getElementById("hamburger");
const menuIcon = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  console.log("I'm clicked");
  menuIcon.style.display = menuIcon.style.display === "flex" ? "none" : "flex";
});

// btnCross.addEventListener("click", () => {
//   menuIcon.style.display = menuIcon.style.display === "flex" ? "none" : "flex";
// });
