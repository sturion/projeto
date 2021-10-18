import React from "react";
import "./Sobre.css";

const Sobre = () => {
  return (
    <div className="SobreBody">
      <h1>Manifesto</h1>
      <hr className="separator"></hr>
      <div className="video-container">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/ZYY77BP7cU4`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <p>
        Os seres humanos vivem por resultados positivos, para realizar sonhos.
        Os sonhos são imprevisíveis, desafiadores! Devemos estar prontos para
        maximizar todas as oportunidades. Estar pronto é tomar as decisões
        corretas para construir uma jornada em direção aos nossos objetivos.
        Objetivos precisam de preparação, comprometimento implacável e
        estratégia de longo prazo. A estratégia se reflete em aprendizado,
        treinamento e competição em um ciclo sem fim que constrói a evolução. A
        evolução traz resultados positivos, que traz diversão, que aproxima as
        pessoas. E unir as pessoas, atingindo resultados positivos e nos
        divertindo é o nosso sonho. Junte-se a nós. Seja FURIA.
      </p>
    </div>
  );
};

export default Sobre;
