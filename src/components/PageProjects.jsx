import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Gallery from "./Gallery";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import GifBackGround from "./GifBackGround";

export default function PageProjects() {
  const projects = [
    {
      id: 1,
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
      title: "Projeto 2",
      description: "Descrição do Projeto 2. Outro projeto interessante.",
      icon: <FaGithub className="text-black text-6xl" />,
      buttons: [
        { name: "Deploy", icon: <FaGithub />, action: () => alert("Deploy do Projeto 2") },
        { name: "Coding", icon: <FaGithub />, action: () => alert("Código do Projeto 2") },
      ],
    },
  ];
  return (
    <section
      id="MyProjects"
      className="relative justify-items-center bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 py-16 min-h-screen w-full"
    >
      <GifBackGround />
      <div className="mb-8 border-b-[1px] w-[600px] text-center">
        <h1 className="text-4xl font-[Poppins] bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 text-transparent bg-clip-text mb-2">
          Meus Projetos
        </h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="max-w-4xl"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Gallery
              Icon={project.icon}
              title={project.title}
              description={project.description}
              Buttons={
                <>
                  {project.buttons.map((btn, idx) => (
                    <Button
                      key={idx}
                      name={btn.name}
                      Icon={btn.icon}
                      onClick={btn.action}
                    />
                  ))}
                </>
              }
              className="bg-white"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
