export default function Navbar() {
  return (
    <nav className="w-full bg-amber-900 flex items-center justify-center">
      <div className="xl:bg-red-400 lg:bg-amber-300 md:bg-pink-500 xl:w-[1140px] w-full h-24 flex flew-row items-center justify-between px-[60px] ">
        <h2 className="text-white text-5xl font-bold">
          <a href="/">
            jaom<span className="text-indigo-500">.</span>
          </a>
        </h2>
        <div className=" text-white flex gap-4">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
    </nav>
  );
}
