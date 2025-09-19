import { FaExternalLinkAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ProjectCard from '../components/project-card';
import { SiAstro, SiJavascript, SiTailwindcss } from 'react-icons/si';

export default function Projects() {
  return (
    <section
      id="#home"
      className="w-full flex flex-col p-5 items-center justify-center "
    >
      <div className=" xl:w-[1140px] w-full min-h-[600px] flex-col flex items-start p-5 md:p-[60px] border-b-1 border-zinc-800  ">
        <div className=" flex flex-col gap-5">
          <div className="flex flex-col">
            <h2 className="text-zinc-200 text-6xl font-bold">Projetos</h2>
            <p className="text-base">
              Aqui estão alguns dos meus projetos selecionados <br /> que
              demonstram minha paixão pelo desenvolvimento front-end.
            </p>
          </div>

          <div className="w-full flex mx-auto gap-10 flex-col lg:grid lg:grid-cols-2 lg:gap-10">
            <ProjectCard
              title="Hipólito Advocacia"
              image="/bg-proj.png"
              stacks={[SiAstro, SiJavascript, SiTailwindcss]}
              gitLink="https://github.com/seu-usuario/projeto"
              liveLink="https://seuprojeto.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
