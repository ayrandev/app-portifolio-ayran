import React, { useEffect } from "react";
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

  /* -------------------- FADE ON SCROLL -------------------- */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* -------------------- CSS LOCAL -------------------- */}
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
            transition-delay: var(--delay);
          }

          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      <section
        id="Projects"
        className="
          relative min-h-screen overflow-x-hidden
          bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950
          px-4 py-20 sm:py-24 lg:py-6
          flex flex-col items-center
        "
      >
        {/* GIF de fundo */}
        <GifBackGround />

        {/* Título */}
        <div
          className="reveal mb-10 border-b border-[#00FFEA] w-full max-w-lg text-center pt-4"
          style={{ "--delay": "0s" }}
        >
          <h1 className="text-4xl sm:text-5xl text-transparent bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 font-[Poppins] bg-clip-text">
            Meus Projetos
          </h1>
        </div>

        {/* Swiper */}
        <div
          className="reveal w-full flex justify-center"
          style={{ "--delay": "0.2s" }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={40}
            centeredSlides
            navigation
            pagination={{ clickable: true }}
            className="w-full max-w-5xl"
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="flex justify-center"
              >
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
        </div>
      </section>
    </>
  );
}
