import "./style.css";
import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";

//HomePage();*/
//console.log("working");
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").addEventListener("click", loadHome);
  document.getElementById("menu").addEventListener("click", loadMenu);
  document.getElementById("about").addEventListener("click", loadAbout);
});
