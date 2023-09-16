import shoppingCart from "../assets/portfolio/shoppinggcart.png";
import pokedex from "../assets/portfolio/pokedexx.png";
import portfolioImg from "../assets/portfolio/portfolioimg.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: shoppingCart,
      link: 'https://shopping-cart-pedrx777.vercel.app',
      git: 'https://github.com/pedrx777/Shopping-Cart',
    },
    {
      id: 2,
      src: pokedex,
      link: 'https://pokedex-pedrx777.vercel.app',
      git: 'https://github.com/pedrx777/Pokedex',
    },
    {
      id: 3,
      src: portfolioImg,
      link: 'https://pedrx777portfolio.netlify.app',
      git: 'https://github.com/pedrx777/Shopping-Cart',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-80 md:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Veja alguns de meus projetos</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, git }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link} target="_blank" rel="noreferrer">Abrir</a>
                </button>
                <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={git} target="_blank" rel="noreferrer">Código</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
