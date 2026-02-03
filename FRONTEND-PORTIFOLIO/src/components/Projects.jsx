import { FaGithub } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";

import SonattaSite from "../assets/sonatta_site.jpeg";
import JogoDoNumeroSecreto from "../assets/jogo-do-numero-secreto.jpeg";
import Portifolio from "../assets/Portifolio-tecnico.jpeg";
import FlightOnTime from "../assets/FlightOnTime.jpeg";

const projects = [
      {
    id: 1,
    image: FlightOnTime,
    title: "Flight On Time",
    description:
      "MVP desenvolvido em hackathon para prever probabilidades de atraso de voos, resolvendo a imprevisibilidade no planejamento aéreo. A solução integra Data Science para análise de padrões, Spring Boot no back-end com API REST e React no front-end para exibição clara dos resultados.",
    buttons: [
      {
        name: "Deploy",
        icon: <MdLaptopChromebook />,
        action: () =>
          window.open(
            "https://tech-flight.vercel.app/",
            "_blank"
          ),
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
    ],
  },
  {
    id: 2,
    image: SonattaSite,
    title: "Site Sonatta Music",
    description:
      "Site institucional da Sonatta, banda voltada a casamentos e eventos. Desenvolvido com React e Tailwind, focado em design elegante, responsividade e conversão, integrando formulário de orçamento direto ao WhatsApp.",
    buttons: [
      {
        name: "Deploy",
        icon: <MdLaptopChromebook />,
        action: () =>
          window.open("https://sonattamusic.vercel.app/", "_blank"),
      },
    ],
  },
  {
    id: 3,
    image: JogoDoNumeroSecreto,
    title: "Jogo do Número Secreto",
    description:
      "Jogo desenvolvido com HTML, CSS e JavaScript puro, usando a API ResponsiveVoice para leitura de voz. Totalmente responsivo.",
    buttons: [
      {
        name: "Deploy",
        icon: <MdLaptopChromebook />,
        action: () =>
          window.open(
            "https://jogo-do-numero-secreto-eight-beta-36.vercel.app/",
            "_blank"
          ),
      },
      {
        name: "Coding",
        icon: <FaGithub />,
        action: () =>
          window.open(
            "https://github.com/ayrandev/app-jogo-do-numero-secreto",
            "_blank"
          ),
      },
    ],
  },
  {
    id: 4,
    image: Portifolio,
    title: "Portifólio Técnico",
    description:
      "Projeto criado em React.js com TailwindCSS e Axios para envio de formulários ao back-end.",
    buttons: [
      {
        name: "Deploy",
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
