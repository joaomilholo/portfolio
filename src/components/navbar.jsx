export default function Navbar() {
  return (
    <nav className="w-full top-0 fixed z-40 flex items-center justify-center h-24 bg-zinc-950">
      <div className=" xl:w-[1140px] w-full  flex flew-row items-center justify-between px-5 md:px-[60px]  ">
        <h2 className="text-white text-5xl font-bold">
          <a href="/">
            jaom<span className="text-indigo-500">.</span>
          </a>
        </h2>
        <div className=" text-white flex text-base font-bold gap-4 ">
          <a href="#projects" className="hover:text-indigo-500">
            Projetos
          </a>
          <a href="#sobre" className="hover:text-indigo-500">
            Sobre
          </a>
          <a href="#contato" className="hover:text-indigo-500">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
