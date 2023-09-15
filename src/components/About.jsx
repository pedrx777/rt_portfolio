const About = () => {
  return (
    <div
      name="sobre"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-10 lg:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
        </div>

        <p className="text-xl mt-10">
          Meu nome é Pedro Gonçalves de Almeida, eu sou um desenvolvedor
          frontend. Estudo programação há 3 anos e este ano dei início à minha
          graduação em Análise e Desenvolvimento de Sistemas, com previsão de
          conclusão em junho de 2025. Apresento orgulhosamente meu projeto de
          portfólio, desenvolvido com as habilidades em React e Tailwind CSS que
          venho aprimorando ao longo da minha trajetória.
        </p>

        <br />

        <p className="text-xl">
          Sou um apaixonado por programação com 3 anos de experiência no campo.
          Minhas principais tecnologias incluem React, HTML, CSS, JavaScript,
          Node e Tailwind CSS. Tenho dedicado meu tempo ao aprimoramento de
          minhas habilidades nessas áreas, criando projetos (como este)
          criativos e funcionais. Estou constantemente em busca de desafios que
          me permitam expandir meu conhecimento e contribuir para soluções
          inovadoras no mundo da programação.
        </p>
      </div>
    </div>
  );
};

export default About;
