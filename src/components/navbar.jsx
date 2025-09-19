export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center">
      <div className="top-0 fixed z-40 xl:w-[1140px] w-full h-24 flex flew-row items-center justify-between px-[60px]  ">
        <h2 className="text-white text-5xl font-bold">
          <a href="/">
            jaom<span className="text-indigo-500">.</span>
          </a>
        </h2>
        <div className=" text-white flex text-base font-bold gap-4 ">
          <a href="#projetos" className="hover:text-indigo-500">Projetos</a>
          <a href="#sobre" className="hover:text-indigo-500">Sobre</a>
          <a href="#contato" className="hover:text-indigo-500">Contato</a>
        </div>
      </div>
    </nav>
  );
}
