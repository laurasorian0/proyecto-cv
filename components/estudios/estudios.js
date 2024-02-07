import { data } from "../../main";
import "./estudios.css"

export const crearEstudios = () => {
  const app = document.querySelector("#app");
  const sectionEstudios = document.createElement("section")
  const divh3 = document.createElement("div")
  const h3 = document.createElement("h3");
  h3.className = "h3"
  h3.innerHTML = "Estudios"

  sectionEstudios.className = "sectionEstudios"
  sectionEstudios.id = "sectionEstudios"

  const divArticles = document.createElement("div");
  divArticles.className = "divArticles"

  divh3.appendChild(h3)
  sectionEstudios.appendChild(divh3)

  data.education.forEach((estudios) => {
    const article = document.createElement("article");
    article.className = "article2";

    const divImg = document.createElement("div");
    divImg.className = "divImg2";

    const img = document.createElement("img");
    img.src = estudios.image;
    img.className = "img";

    const h4 = document.createElement("h4");
    h4.className = "h4";
    h4.innerHTML = estudios.degree;

    const p = document.createElement("p");
    p.innerHTML = estudios.university + " - " + estudios.graduationYear;

    divImg.appendChild(img)

    article.appendChild(divImg)
    article.appendChild(h4)
    article.appendChild(p)
    divArticles.appendChild(article)
    sectionEstudios.appendChild(divArticles)
    app.appendChild(sectionEstudios)
  })
}