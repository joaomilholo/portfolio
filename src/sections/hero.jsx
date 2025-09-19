import { FaExternalLinkAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import SocialButton from '../components/social-button';
import Button from '../components/button';

export default function Hero() {
  return (
    <section id='#home' className="w-full flex flex-col p-10 items-center justify-center bg-[url('../public/looper-bg.svg')] bg-no-repeat bg-top-right">
      <div className=" xl:w-[1140px] w-full min-h-[600px] flex-col flex items-start justify-center md:px-[60px] border-b-1 border-zinc-800  ">
        <div className=" flex flex-col max-w-[660px] gap-3">
          <h1 className="text-zinc-200 text-6xl font-bold">
            Olá, sou João Milholo
          </h1>
          <h2 className="text-5xl font-bold text-indigo-500">
            Front-end Developer
          </h2>

        </div>

        <div className=" flex mt-6 gap-2">
          <SocialButton icon={<FaGithub size={25}/>} link="https://github.com/joaomilholo"/>
          <SocialButton icon={<FaLinkedinIn size={25}/>} link="https://github.com/joaomilholo"/>
          <Button text="Contato" link="/" />
        </div>
      </div>
    </section>
  );
}
