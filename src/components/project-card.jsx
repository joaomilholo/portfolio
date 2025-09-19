export default function ProjectCard({
  image,
  title,
  stacks = [],
  gitLink,
  liveLink,
}) {
  return (
    <div className="bg-zinc-950 shadow-lg  overflow-hidden w-full md:w-[509px] mx-auto border-1 border-zinc-800">
      <img src={image} alt={title} className="w-full object-cover h-[309px]" />

      <div className="p-5 flex flex-col gap-4">
        <h4 className="text-3xl font-semibold text-gray-300">{title}</h4>

        <div className="flex gap-4 flex-wrap ">
          {stacks.map((IconComponent, index) => (
            <IconComponent
              key={index}
              title={IconComponent.name}
              size={24}
              color="#fff"
            />
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          {gitLink && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2 text-base px-5 text-white border-2 border-zinc-900 rounded-full hover:border-2 bg-indigo-500 transition delay-150 duration-300 ease-out"
            >
              Ver Código
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2 text-base px-5 text-white border-2 border-zinc-900 rounded-full hover:border-2 hover:bg-indigo-500 transition delay-150 duration-300 ease-out"
            >
              Ver Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
