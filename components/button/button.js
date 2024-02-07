import "./button.css"

export const createButton = (textButton, nodoPadre, clase) => {
  const button = document.createElement("button");
  button.innerHTML = textButton;
  button.className = "button"
  button.id = clase;
  nodoPadre.appendChild(button)
}