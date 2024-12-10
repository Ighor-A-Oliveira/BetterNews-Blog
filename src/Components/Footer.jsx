import { Link } from "react-router-dom";
import LogoMini from "./LogoMini";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";


export default function Footer() {
  return (
    <div className="text-white w-full lg:w-[80%] p-4 flex justify-around items-centers flex-col">
      <div className="flex flex-col lg:flex-row justify-around items-center w-full flex-wrap font-sans">
        <Link className="hover:text-gray-400">Sobre Nós</Link>
        <Link className="hover:text-gray-400 mt-2 lg:mt-0">Contato</Link>
        <Link className="hover:text-gray-400 mt-2 lg:mt-0">Política de Privacidade e Termos de Uso</Link>
        <Link className="hover:text-gray-400 mt-2 lg:mt-0">Assinatura de Newsletter</Link>
        <Link className="hover:text-gray-400 mt-2 lg:mt-0">Links Úteis</Link>
        <Link className="hover:text-gray-400 mt-2 lg:mt-0">Parceros</Link>
      </div>
      <div className="w-full mt-4 flex flex-col items-center ">
        <LogoMini/>
        <div className="flex justify-center items-center pb-10">
          <FaInstagram className="mr-2" size={25} />
          <FaSquareXTwitter className="mr-2" size={25}  />
          <FaYoutube className="mr-2" size={25}  />
          <AiFillTikTok className="mr-2" size={25}  />
        </div>
        <p className="pb-4 font-sans font-md text-center">&copy; 2024 BetterNews. Todos os direitos reservados. </p>
      </div>
    </div>
  )
}
