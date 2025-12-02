import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

import Gallery from "../components/Gallery";
import Button from "../components/Button";
import GifBackGround from "../components/GifBackGround";
import projects from "../components/Projects";

export default function PageProjects() {
  return (
    <section
      id="Projects"
      className="
        relative min-h-screen
        bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950
        px-4 py-20 sm:py-24 lg:py-32
        flex flex-col items-center
      "
    >
      {/* GIF de fundo */}
      <GifBackGround />

      {/* Título */}
      <div className="mb-10 border-b border-[#00FFEA] w-full max-w-lg text-center pt-4">
        <h1 className="text-4xl sm:text-5xl text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 font-[Poppins] bg-clip-text">
          Meus Projetos
        </h1>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-7xl"
        breakpoints={{
          450: { slidesPerView: 1 },
          640: { slidesPerView: 1.1 },
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 1.5 },
          1280: { slidesPerView: 2 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Gallery
              image={project.image}
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
