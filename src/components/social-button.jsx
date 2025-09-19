export default function SocialButton({icon, link}) {
  if (!icon || !link) {
    console.warn("IconButton precisa de um icon e link!");
    return null
  }

  return (
    <a href={link}
    className="flex items-center justify-center p-3  text-white border-2 border-zinc-900 rounded-full hover:border-2 hover:bg-indigo-500 transition delay-150 duration-300 ease-out"
    target="_blank"
    _rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}