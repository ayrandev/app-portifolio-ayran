import { FaGithub } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md"

const projects = [
  {
    id: 1,
    image: "../assets/Portifolio.png",
    title: "Portifólio Pessoal",
    description: "Esse projeto foi desenvolvido com o ituito de colocar em pratica todos os fundamentos que tenho conhecimento. A base dele é React.js e foi utilizado biblioteca axios para enviar requiseções através do formulário para o back-end.",
    buttons: [
      { name: "Coding", icon: <FaGithub />, action: () => window.open("https://github.com/ayrandev/MY-PORTIFOLY", "_blank") },
    ],
  },
  {
    id: 2,
    image: "../assets/Portifolio.png",
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
    image: "../assets/Portifolio.png",
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
