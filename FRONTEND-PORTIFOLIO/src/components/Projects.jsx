import { FaGithub, FaBook } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";

import SonattaSite from "../assets/sonatta_site.jpeg";
import Portifolio from "../assets/Portifolio-tecnico.jpeg";
import FlightOnTime from "../assets/FlightOnTime.jpeg";
import JustinaVirtual from "../assets/JustinaVirtual.jpeg";

const projects = [
  {
    id: 1,
    image: JustinaVirtual,
    title: "projects.justina.title",
    description: "projects.justina.description",
    buttons: [
      {
        name: "Aplication",
        icon: <MdLaptopChromebook />,
        action: () =>
          window.open(
            "https://s02-26-e25-justina-virtual.vercel.app/",
            "_blank"
          ),
      },
      {
        name: "Coding",
        icon: <FaGithub />,
        action: () =>
          window.open(
            "https://github.com/ayrandev/justina-simulator/tree/dev",
            "_blank"
          ),
      },
      {
        name: "Docs",
        icon: <FaBook />,
        action: () =>
          window.open(
            "https://github.com/ayrandev/justina-simulator/blob/dev/README.md",
            "_blank"
          ),
      },
    ],
  },
  {
    id: 2,
    image: FlightOnTime,
    title: "projects.flightOnTime.title",
    description: "projects.flightOnTime.description",
    buttons: [
      {
        name: "Aplication",
        icon: <MdLaptopChromebook />,
        action: () =>
          window.open("https://tech-flight.vercel.app/", "_blank"),
      },
      {
        name: "Coding",
        icon: <FaGithub />,
        action: () =>
          window.open(
            "https://github.com/orgs/Projeto-3-FlightOnTime/repositories",
            "_blank"
          ),
      },
      {
        name: "Docs",
        icon: <FaBook />,
        action: () =>
          window.open(
            "https://github.com/ayrandev/app-flightontop/blob/main/README.md",
            "_blank"
          ),
      },
    ],
  },
  {
    id: 3,
    image: SonattaSite,
    title: "projects.sonatta.title",
    description: "projects.sonatta.description",
    buttons: [
      {
        name: "Aplication",
        icon: <MdLaptopChromebook />,
        action: () =>
          window.open("https://sonattamusic.vercel.app/", "_blank"),
      },
    ],
  },
  {
    id: 4,
    image: Portifolio,
    title: "projects.portfolio.title",
    description: "projects.portfolio.description",
    buttons: [
      {
        name: "Aplication",
        icon: <MdLaptopChromebook />,
        action: () =>
          window.open(
            "https://ayran-vieira-dev.vercel.app/",
            "_blank"
          ),
      },
      {
        name: "Coding",
        icon: <FaGithub />,
        action: () =>
          window.open(
            "https://github.com/ayrandev/app-portifolio-ayran",
            "_blank"
          ),
      },
    ],
  },
];

export default projects;