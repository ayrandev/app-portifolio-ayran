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
    description:
      "Site institucional moderno para apresentar serviços, aumentar credibilidade e facilitar o contato com clientes.",
    benefits: [
      "Design moderno e responsivo",
      "Carregamento rápido",
      "Contato direto via WhatsApp",
    ],
    buttons: [
      {
        name: "Visitar site",
        Icon: MdLaptopChromebook,
        onClick: () =>
          window.open("https://SEUPORTFOLIO.vercel.app", "_blank"),
      },
      {
        name: "Orçamento",
        Icon: FaWhatsapp,
        onClick: () =>
          window.open(
            "https://wa.me/5585999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.",
            "_blank"
          ),
      },
    ],
  },
  {
    id: 2,
    image: SonattaSite,
    title: "Site Profissional",
    description:
      "Página focada em conversão, ideal para anúncios, lançamentos e divulgação de serviços.",
    benefits: [
      "Layout estratégico",
      "Chamada para ação clara",
      "Alta taxa de conversão",
    ],
    buttons: [
      {
        name: "Visitar site",
        Icon: MdLaptopChromebook,
        onClick: () =>
          window.open("https://sonattamusic.vercel.app", "_blank"),
      },
      {
        name: "Orçamento",
        Icon: FaWhatsapp,
        onClick: () =>
          window.open(
            "https://wa.me/5585999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.",
            "_blank"
          ),
      },
    ],
  },
  {
    id: 3,
    image: FlightOnTime,
    title: "Sistema Web",
    description:
      "Sistema sob medida para automatizar processos e facilitar a gestão do negócio.",
    benefits: [
      "Funcionalidades personalizadas",
      "Escalável",
      "Interface intuitiva",
    ],
    buttons: [
      {
        name: "Visitar site",
        Icon: MdLaptopChromebook,
        onClick: () =>
          window.open("https://tech-flight.vercel.app/", "_blank"),
      },
      {
        name: "Orçamento",
        Icon: FaWhatsapp,
        onClick: () =>
          window.open(
            "https://wa.me/5585999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.",
            "_blank"
          ),
      },
    ],
  },
];

export default projectsClient;
