import { MdLaptopChromebook } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import Portifolio from "../assets/Portifolio-tecnico.jpeg";
import SonattaSite from "../assets/sonatta_site.jpeg";
import FlightOnTime from "../assets/FlightOnTime.jpeg";

const projectsClient = [
  {
    id: 1,
    image: Portifolio,
    title: "Portfólio Pessoal",

    // ❌ PROBLEMA
    description:
      "Profissional sem presença digital estruturada, com dificuldade em transmitir credibilidade e atrair clientes.",

    // 🚀 SOLUÇÃO
    solution:
      "Criação de um portfólio moderno, responsivo e estratégico, focado em posicionamento profissional e geração de leads.",

    // 📈 RESULTADO
    benefits: [
      "Mais autoridade no mercado",
      "Aumento de contatos qualificados",
      "Apresentação profissional dos serviços",
    ],

    buttons: [
      {
        name: "Visitar site",
        Icon: MdLaptopChromebook,
        onClick: () =>
          window.open("https://SEUPORTFOLIO.vercel.app", "_blank"),
      },
      {
        name: "Solicitar projeto",
        Icon: FaWhatsapp,
        onClick: () =>
          window.open(
            "https://wa.me/5585985398517?text=Olá! Gostaria de criar um portfólio profissional.",
            "_blank"
          ),
      },
    ],
  },

  {
    id: 2,
    image: SonattaSite,
    title: "Site Profissional (Sonatta)",

    description:
      "Empresa com dificuldade em converter visitantes em clientes e apresentar seus serviços de forma clara.",

    solution:
      "Desenvolvimento de um site estratégico com foco em conversão, utilizando estrutura persuasiva e chamadas para ação eficientes.",

    benefits: [
      "Aumento na geração de leads",
      "Melhor comunicação com clientes",
      "Maior taxa de conversão",
    ],

    buttons: [
      {
        name: "Visitar site",
        Icon: MdLaptopChromebook,
        onClick: () =>
          window.open("https://sonattamusic.vercel.app", "_blank"),
      },
      {
        name: "Solicitar projeto",
        Icon: FaWhatsapp,
        onClick: () =>
          window.open(
            "https://wa.me/5585985398517?text=Olá! Gostaria de um site profissional para meu negócio.",
            "_blank"
          ),
      },
    ],
  },

  {
    id: 3,
    image: FlightOnTime,
    title: "Sistema Web (Flight On Time)",

    description:
      "Processos manuais e falta de organização, gerando retrabalho e perda de produtividade operacional.",

    solution:
      "Criação de um sistema web personalizado para automatizar processos e centralizar a gestão das operações.",

    benefits: [
      "Automação de tarefas repetitivas",
      "Redução de erros operacionais",
      "Aumento de produtividade",
    ],

    buttons: [
      {
        name: "Ver sistema",
        Icon: MdLaptopChromebook,
        onClick: () =>
          window.open("https://tech-flight.vercel.app/", "_blank"),
      },
      {
        name: "Solicitar sistema",
        Icon: FaWhatsapp,
        onClick: () =>
          window.open(
            "https://wa.me/5585985398517?text=Olá! Gostaria de um sistema personalizado.",
            "_blank"
          ),
      },
    ],
  },
];

export default projectsClient;