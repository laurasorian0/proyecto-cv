import { data } from "../../main";
import "./trabajos.css"


export const crearTrabajos = () => {

  const app = document.querySelector("#app");
  const sectionTrabajo = document.createElement("section");
  sectionTrabajo.className = "sectionTrabajo"
  sectionTrabajo.id = "sectionTrabajos"
  data.workExperience.forEach((trabajo) => {
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = trabajo.position + "  -  " + trabajo.company;
    const fechaParrafo = document.createElement("p");
    fechaParrafo.textContent = "Fecha: " + trabajo.startDate + " - " + trabajo.endDate
    const descripcionParrafo = document.createElement("p");
    descripcionParrafo.textContent = trabajo.description;

    article.className = "article"
    // Agregar elementos al artículo
    article.appendChild(h4);
    article.appendChild(fechaParrafo);
    article.appendChild(descripcionParrafo);
    sectionTrabajo.appendChild(article);
    app.appendChild(sectionTrabajo)
  });
}