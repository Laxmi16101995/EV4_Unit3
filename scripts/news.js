// Ude Import export (MANDATORY)

import Navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = Navbar();

let news = JSON.parse(localStorage.getItem("news"));
console.log(news);

let box = document.createElement("div");
box.setAttribute("id", "big");

let ti = document.createElement("h3");
ti.innerText = news.title;

let image = document.createElement("img");
image.setAttribute("id", "image");
image.src = news.urlToImage;

let dis = document.createElement("p");
dis.innerText = news.content;
box.append(ti, image,dis);
document.querySelector("#detailed_news").append(box);


let input = document.querySelector("#search_input");
input.addEventListener("keydown", take);
function take(e) {
  if (e.key == "Enter") {
    let give = document.querySelector("#search_input").value;
    //     console.log(give);
    localStorage.setItem("new", JSON.stringify(give));
    window.location.href="../search.html"
  }
}
