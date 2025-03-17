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
    description: "Esse projeto foi desenvolvido com o intuito de captar clientes, através chamadas para ação que induzem a criação da sua pagina web. A estrutura dele é simples, utilizando apenas HTML e CSS puro.",
    buttons: [
      { name: "Deploy", icon: <MdLaptopChromebook />, action: () => window.open("https://app-landing-page-ayran.vercel.app/","_blank") },
      { name: "Coding", icon: <FaGithub />, action: () => window.open("https://github.com/ayrandev/app-portifolio-ayran", "_blank") },
    ],
  },
  {
    id: 2,
    image: JogoDoNumeroSecreto,
    title: "Jogo do número secreto",
    description: "Este é um jogo simples desenvolvido com HTML, CSS e JavaScript puro, no qual o jogador precisa adivinhar um número secreto gerado aleatoriamente. O projeto conta com suporte para leitura de voz usando a API ResponsiveVoice e é totalmente responsivo.",
    //icon: <FaGithub className="text-black text-3xl" />,
    buttons: [
      { name: "Deploy", icon: <MdLaptopChromebook />, action: () => window.open("https://jogo-do-numero-secreto-eight-beta-36.vercel.app/", "_blank") },
      { name: "Coding", icon: <FaGithub />, action: () => window.open("https://github.com/ayrandev/app-jogo-do-numero-secreto","_blank") },
    ],
  },
  {
    id: 3,
    image: Portifolio,
    title: "Portifólio Técnico",
    description: "Esse projeto foi desenvolvido com o intuito de apresentar algumas das tecnologias que trabalho. A base dele é React.js, para estilização usei a biblioteca tailwind e foi utilizado a biblioteca axios para enviar requisições através do formulário para o back-end.",
    //icon: <FaGithub className="text-black text-3xl" />,
    buttons: [
      { name: "Deploy", icon: <MdLaptopChromebook />, action: () => window.open("https://jogo-do-numero-secreto-eight-beta-36.vercel.app/", "_blank") },
      { name: "Coding", icon: <FaGithub />, action: () => window.open("https://github.com/ayrandev/app-jogo-do-numero-secreto","_blank") },
    ],
  },
];

export default projects;
