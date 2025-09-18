import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center ">
      <div className="xl:bg-red-400 lg:bg-amber-300 md:bg-pink-500 xl:w-[1140px] w-full min-h-[600px] flex-col flex items-start justify-center px-[60px] border-b-1 border-zinc-800 ">
        <div className=" flex flex-col max-w-[660px] gap-3">
          <h1 className="text-cyan-50 text-6xl font-bold">
            Olá, sou João Milholo
          </h1>
          <h2 className="text-5xl font-bold text-indigo-500">
            Full-stack Developer
          </h2>
          <p className=" text-zinc-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            similique asperiores perspiciatis architecto officia, minima tenetur
            reiciendis vitae, atque in accusamus? Nam nobis sint est qui, illo
            vero voluptatibus nostrum?
          </p>
        </div>

        <div className=" flex mt-6 gap-2">
          <div className="p-2.5 cursor-pointer  rounded-full border border-zinc-800 text-white">
            <a
              href="https://github.com/joaomilholo"
              target="_blank"
              rel="noopener"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <div className="p-2.5 rounded-full border border-zinc-800 text-white">
            <a href="#">
              <FaLinkedin size={24} />
            </a>
          </div>

          <div className="py-2.5 px-5 rounded-4xl border border-zinc-800 text-white font-bold">
            <a href="#">Entre em contato</a>
          </div>
        </div>
      </div>
    </section>
  );
}
