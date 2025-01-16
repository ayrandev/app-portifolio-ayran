import React from "react";
import Cards from "./Cards";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import GifBackGround from "./GifBackGround";

export default function PageProjects() {
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

      <div className="pt-4 grid grid-cols-2 gap-x-40 gap-y-12">
        <div>
          <Cards
            Icon={<FaGithub className="text-black text-6xl" />}
            className={`h-64 w-96 bg-gray-200 border`}
            Buttons={
              <div className="grid grid-cols-2 content-end gap-10 mt-44">
                <Button name="Deploy" Icon={<FaGithub />} />
                <Button name="Coding" Icon={<FaGithub />} />
              </div>
            }
          />
        </div>

        <div>
          <Cards
            Icon={<FaGithub className="text-black text-6xl" />}
            className={`h-64 w-96 bg-gray-200 border`}
            Buttons={
              <div className="grid grid-cols-2 content-end gap-10 mt-44">
                <Button name="Deploy" Icon={<FaGithub />} />
                <Button name="Coding" Icon={<FaGithub />} />
              </div>
            }
          />
        </div>

        <div>
          <Cards
            Icon={<FaGithub className="text-black text-6xl" />}
            className={`h-64 w-96 bg-gray-200 border`}
            Buttons={
              <div className="grid grid-cols-2 content-end gap-10 mt-44">
                <Button name="Deploy" Icon={<FaGithub />} />
                <Button name="Coding" Icon={<FaGithub />} />
              </div>
            }
          />
        </div>

        <div className="flex">
          <Cards
            Icon={<FaGithub className="text-black text-6xl" />}
            className={`h-64 w-96 bg-gray-200 border`}
            Buttons={
              <div className="grid grid-cols-2 content-end gap-10 mt-44">
                <Button name="Deploy" Icon={<FaGithub />} />
                <Button name="Coding" Icon={<FaGithub />} />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
