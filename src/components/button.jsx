export default function Button({ text, icon, link, target, rel }) {
  if (!text || !link) {
    console.warn('TextIconButton precisa de texto e link!');
    return null;
  }

  return (
    <a
      href={link}
      className="flex items-center justify-center py-2 text-base px-5 text-white border-2 border-zinc-900 rounded-full hover:border-2 hover:bg-indigo-500 transition delay-150 duration-300 ease-out"
      target={target} // se undefined, usa padrão
      rel={rel}       // se undefined, usa padrão
    >
      {text}
      {icon && {icon}}
    </a>
  );

}