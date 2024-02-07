import { crearNav } from './components/navegador/navegador';
import './style.css'
import "./components/button/button.css"
import { crearSection } from './components/section/section';
import { crearTrabajos } from './components/trabajos/trabajos';
import { crearEstudios } from './components/estudios/estudios';
import { crearSkills } from './components/skills/skills';
import { crearProyectos } from './components/proyectos/proyectos';

export const data = {
  name: "Laura Soriano Fernández",
  title: "Lista para hacer realidad tu próxima idea.",
  email: "laura130512@gmail.com",
  avatar:
    "./public/IMG_5571.JPG",
  aboutMe:
    "Soy Laura, productora audiovisual y estudiante Full Stack developer. Adoro los nuevos retos, por lo que estoy deseando empezar con nuevos proyectos en los que mejorar profesional y personalmente.",

  education: [
    {
      degree: "Realización de Proyectos Audiovisuales y Espectáculos",
      university: "Campus EUSA",
      graduationYear: 2018,
      image: "./public/realizadora.jpeg"
    },
    {
      degree: "Full Stack Developer",
      university: "Power The Rock (The Power)",
      graduationYear: 2024,
      image: "./public/La_hackaton_de_mujeres_1.png"
    }
  ],
  workExperience: [
    {
      position: "Ayudante Producción",
      company: "FootballClub",
      startDate: "2023",
      endDate: "2024",
      description:
        "Proceso de instalación de cámaras automáticas en más de 40 clubes. Gestión y creación de partidos con Mediastream. Revisión y control de horarios para la emisión de partidos.",
    },
    {
      position: "Productora Audiovisual",
      company: "Footters",
      startDate: "2018",
      endDate: "2023",
      description:
        "Gestión de la emisión de partidos de 1 RFEF y 2 RFEF. Contratación y gestión de señales de productoras en toda España. Contacto con clubes para la emisión de sus partidos. Gestión de señales con televisiones.",
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
  ],
  projects: [
    {
      title: "Proyect Filter",
      description:
        "Diseño de una aplicación con filtros para aprender a usarlos correctamente",
      link: "https://65a41ac2cd15ada1f4b17cb6--curious-kangaroo-c7022b.netlify.app/",
      preview: "./public/Filtros.png/",
    },
    {
      title: "Búsqueda Pinterest",
      description: "Recreación de la plataforma Pinterest para usar una API y aplicar búsquedas desde la web.",
      link: "https://neon-entremet-3c0465.netlify.app/",
      preview: "./public/Pinterest.png/"
    },
  ],
};

crearNav();
crearSection();
crearSkills();
crearEstudios();
crearTrabajos();
crearProyectos();


