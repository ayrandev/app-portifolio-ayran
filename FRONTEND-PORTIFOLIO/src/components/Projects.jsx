import { FaGithub } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import Portifolio from "../assets/portifolio.jpeg";
import JogoDoNumeroSecreto from "../assets/jogo-do-numero-secreto.jpeg";

const projects = [
  {
    id: 1,
    image: Portifolio,
    title: "Portifólio Pessoal",
    description: "Esse projeto foi desenvolvido com o intuito de colocar em prática alguns dos fundamentos que tenho conhecimento. A base dele é React.js, para estilização usei a biblioteca tailwind e foi utilizado a biblioteca axios para enviar requisições através do formulário para o back-end.",
    buttons: [
      { name: "Coding", icon: <FaGithub />, action: () => window.open("https://github.com/ayrandev/app-portifolio-ayran", "_blank") },
    ],
  },
  {
    id: 2,
    image: JogoDoNumeroSecreto,
    title: "Projeto 2",
    description: "Descrição do Projeto 2. Outro projeto interessante.",
    icon: <FaGithub className="text-black text-3xl" />,
    buttons: [
      { name: "Deploy", icon: <MdLaptopChromebook />, action: () => alert("Deploy do Projeto 2") },
      { name: "Coding", icon: <FaGithub />, action: () => alert("Código do Projeto 2") },
    ],
  },
  {
    id: 3,
    image: "", // Se não tiver imagem, pode deixar como uma string vazia
    title: "Projeto 3",
    description: "Descrição do Projeto 3. Outro projeto interessante.",
    icon: <FaGithub className="text-black text-3xl" />,
    buttons: [
      { name: "Deploy", icon: <MdLaptopChromebook />, action: () => alert("Deploy do Projeto 3") },
      { name: "Coding", icon: <FaGithub />, action: () => alert("Código do Projeto 3") },
    ],
  },
];

export default projects;
