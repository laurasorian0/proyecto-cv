import { data } from "../../main"
import "./skills.css"

export const crearSkills = () => {

  const app = document.querySelector("#app");
  const sectionSkills = document.createElement("section");
  sectionSkills.className = "sectionSkills";
  app.appendChild(sectionSkills);

  data.skills.forEach((skill) => {
    const buttonSkill = document.createElement("button");
    buttonSkill.innerHTML = skill;
    buttonSkill.className = "buttonSkill"
    sectionSkills.appendChild(buttonSkill)
  })
}