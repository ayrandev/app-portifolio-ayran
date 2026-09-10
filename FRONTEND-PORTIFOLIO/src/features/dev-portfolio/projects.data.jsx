import { FaGithub, FaBook, FaClipboardList } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";

import SonattaSite from "../../assets/sonatta_site.jpeg";
import Portifolio from "../../assets/Portifolio-tecnico.jpeg";
import FlightOnTime from "../../assets/FlightOnTime.jpeg";
import JustinaVirtual from "../../assets/JustinaVirtual.jpeg";
import EmilyWebPainel from "../../assets/EmilyWebPainel.jpg";

const projects = [
  {
    id: 1,
    image: JustinaVirtual,
    title: "projects.justina.title",
    description: "projects.justina.description",
    buttons: [
      {
        name: "projects.buttons.application",
        icon: <MdLaptopChromebook />,
        action: () =>
          window.open("https://s02-26-e25-justina-virtual.vercel.app/", "_blank"),
      },
      {
        name: "projects.buttons.code",
        icon: <FaGithub />,
        action: () =>
          window.open("https://github.com/ayrandev/justina-simulator/tree/dev", "_blank"),
      },
      {
        name: "projects.buttons.docs",
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
        name: "projects.buttons.application",
        icon: <MdLaptopChromebook />,
        action: () => window.open("https://tech-flight.vercel.app/", "_blank"),
      },
      {
        name: "projects.buttons.code",
        icon: <FaGithub />,
        action: () =>
          window.open("https://github.com/orgs/Projeto-3-FlightOnTime/repositories", "_blank"),
      },
      {
        name: "projects.buttons.docs",
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
        name: "projects.buttons.application",
        icon: <MdLaptopChromebook />,
        action: () => window.open("https://sonattamusic.vercel.app/", "_blank"),
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
        name: "projects.buttons.application",
        icon: <MdLaptopChromebook />,
        action: () => window.open("https://ayran-vieira-dev.vercel.app/", "_blank"),
      },
      {
        name: "projects.buttons.code",
        icon: <FaGithub />,
        action: () =>
          window.open("https://github.com/ayrandev/app-portifolio-ayran", "_blank"),
      },
    ],
  },
  {
    id: 5,
    image: EmilyWebPainel,
    title: "projects.emily.title",
    description: "projects.emily.description",
    buttons: [
      {
        name: "projects.buttons.application",
        icon: <MdLaptopChromebook />,
        action: () => window.open("https://emilyweb-three.vercel.app/", "_blank"),
      },
      {
        name: "projects.buttons.panel",
        icon: <FaClipboardList />,
        action: () =>
          window.open("https://emilyweb-three.vercel.app/confirmados", "_blank"),
      },
    ],
  },
];

export default projects;
