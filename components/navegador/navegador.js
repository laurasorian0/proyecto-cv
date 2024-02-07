import { data } from "../../main"
import { createButton } from "../button/button"
import "./navegador.css"

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    console.log(`Scrolling to section: ${sectionId}`);
  } else {
    console.log(`Section not found: ${sectionId}`);
  }
};

export const crearNav = () => {
  const app = document.querySelector("#app");


  const divNav = document.createElement("div");
  const divMenu = document.createElement("div");
  const name = document.createElement("h2");

  createButton("Trabajos", divMenu, "trabajosBtn");
  createButton("Estudios", divMenu, "estudiosBtn");
  createButton("Proyectos", divMenu, "proyectosBtn");

  name.innerHTML = data.name;
  divMenu.className = "divMenu";
  divNav.className = "divNav";

  divNav.appendChild(name)
  divNav.appendChild(divMenu)
  app.appendChild(divNav)


  document.getElementById('trabajosBtn').addEventListener('click', () => {
    console.log("click trabajos")
    scrollToSection("sectionTrabajos");
  });

  document.getElementById('estudiosBtn').addEventListener('click', () => {
    scrollToSection("sectionEstudios");
  });

  document.getElementById('proyectosBtn').addEventListener('click', () => {
    scrollToSection("sectionProyectos");
  });
}

