import { data } from "../../main";
import "./section.css"

export const crearSection = () => {
  const app = document.querySelector("#app");

  const section = document.createElement("section");
  const divAboutMe = document.createElement("div");
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const divImg = document.createElement("div")
  const img = document.createElement("img")

  section.className = "AboutmeAvatar";
  divAboutMe.className = "divAboutMe";
  h1.innerHTML = data.title;
  h3.innerHTML = data.aboutMe;
  divImg.className = "divImg"
  img.src = data.avatar

  divAboutMe.appendChild(h1);
  divAboutMe.appendChild(h3);
  section.appendChild(divAboutMe);
  divImg.appendChild(img);
  section.appendChild(divImg);
  app.appendChild(section);

  img.addEventListener('click', function () {
    console.log("Click en la imagen");
    if (img.src.includes("IMG_5571.JPG")) {
      img.src = "./public/_DSC7979.JPEG";
    } else {
      img.src = "./public/IMG_5571.JPG";
    }
  });

}