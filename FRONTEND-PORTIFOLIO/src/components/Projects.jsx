import { FaGithub } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";

import LandingPage from "../assets/landing-page.jpeg";
import JogoDoNumeroSecreto from "../assets/jogo-do-numero-secreto.jpeg";
import Portifolio from "../assets/Portifolio-tecnico.jpeg";

const projects = [
  {
    id: 1,
    image: LandingPage,
    title: "Landing Page",
    description:
      "Projeto desenvolvido para captação de clientes com estrutura simples em HTML e CSS puro, focado em conversão.",
    buttons: [
      {
        name: "Deploy",
        icon: <MdLaptopChromebook />,
        action: () =>
          window.open("https://app-landing-page-ayran.vercel.app/", "_blank"),
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
  {
    id: 2,
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
    id: 3,
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
];

export default projects;
