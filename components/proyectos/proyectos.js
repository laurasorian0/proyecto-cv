import { data } from "../../main"
import "./proyectos.css"

export const crearProyectos = () => {

  const app = document.querySelector("#app");
  const sectionProyectos = document.createElement("section");
  sectionProyectos.className = "sectionProyectos";
  sectionProyectos.id = "sectionProyectos";


  data.projects.forEach((project) => {

    const divImg = document.createElement("div");
    divImg.className = "divImg"

    const a = document.createElement("a");
    a.href = project.link



    const title = document.createElement("h5");
    title.innerHTML = project.title;

    const description = document.createElement("p");
    description.innerHTML = project.description;


    a.appendChild(title);
    a.appendChild(description);
    a.appendChild(divImg);
    sectionProyectos.appendChild(a);
  });

  app.appendChild(sectionProyectos);
}
