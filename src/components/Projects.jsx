import React from "react";

export default function Projects () {
    const projects = [
        {
          id: 1,
          image: "https://via.placeholder.com/300",
          title: "Projeto 1",
          description: "Descrição do Projeto 1. Detalhes sobre as tecnologias usadas.",
          icon: <FaGithub className="text-black text-6xl" />,
          buttons: [
            { name: "Deploy", icon: <FaGithub />, action: () => alert("Deploy do Projeto 1") },
            { name: "Coding", icon: <FaGithub />, action: () => alert("Código do Projeto 1") },
          ],
        },
        {
          id: 2,
          image: "https://via.placeholder.com/300",
          title: "Projeto 2",
          description: "Descrição do Projeto 2. Outro projeto interessante.",
          icon: <FaGithub className="text-black text-6xl" />,
          buttons: [
            { name: "Deploy", icon: <FaGithub />, action: () => alert("Deploy do Projeto 2") },
            { name: "Coding", icon: <FaGithub />, action: () => alert("Código do Projeto 2") },
          ],
        },
        {
          id: 3,
          image: "https://via.placeholder.com/300",
          title: "Projeto 3",
          description: "Descrição do Projeto 3. Outro projeto interessante.",
          icon: <FaGithub className="text-black text-6xl" />,
          buttons: [
            { name: "Deploy", icon: <FaGithub />, action: () => alert("Deploy do Projeto 2") },
            { name: "Coding", icon: <FaGithub />, action: () => alert("Código do Projeto 2") },
          ],
        },
      ];
}