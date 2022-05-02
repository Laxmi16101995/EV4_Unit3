// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import Navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = Navbar();

//https://masai-mock-api.herokuapp.com/news/top-headlines?country=in

function searchtwo(a) {
  //console.log(a);

  fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${a}
`)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res.articles);
      mapping(res.articles);
    })
    .catch(function (err) {
      console.log(err);
    });

  function mapping(data) {
    document.querySelector("#results").innerHTML = null;
    data.map(function (e) {
      let box = document.createElement("div");
      box.setAttribute("class", "news");

      let imgdiv = document.createElement("div");
      imgdiv.setAttribute("id", "a");

      let image = document.createElement("img");
      image.setAttribute("id", "image");
      image.src = e.urlToImage;
      imgdiv.append(image);

      let details = document.createElement("div");
      details.setAttribute("id", "de");
      let ti = document.createElement("h3");
	 ti.setAttribute("id","point")
      ti.innerText = e.title;
      ti.addEventListener("click", function () {
        Save(e);
      });

      let dis = document.createElement("p");
      dis.innerText = e.description;
      details.append(ti, dis);
      box.append(imgdiv, details);
      document.querySelector("#results").append(box);
    });
  }
}

let side = document.querySelector("#sidebar").children;
for (let con of side) {
  //console.log(con.id);
  //con.id="in"

  con.addEventListener("click", search);
}

function search() {
  searchtwo(this.id);
}

window.addEventListener("load", function () {
  searchtwo("in");
});

let input = document.querySelector("#search_input");
input.addEventListener("keydown", take);
function take(e) {
  if (e.key == "Enter") {
    let give = document.querySelector("#search_input").value;
    //     console.log(give);
    localStorage.setItem("new", JSON.stringify(give));
    window.location.href = "../search.html";
  }
}

function Save(e){
	localStorage.setItem("news", JSON.stringify(e));
	window.location.href="../news.html"
}
