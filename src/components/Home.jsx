import HeroImage from "../assets/eu.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="inicial"
      className="h-screen w-full bg-gradient-to-b from-black 
    via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="mt-14 md:mt-0 flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Desenvolvedor Frontend</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Recentemente fiz uma transição em minha carreira para o
            desenvolvimento Frontend como Freelancer e tenho projetos meus tanto
            concluídos como em andamento em meu GitHub. Minha especialidade
            inclui React, HTML, CSS, JavaScript, Node e Tailwind CSS.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
            <img src={HeroImage} alt="Minha foto" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
