import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Viagens Inteligentes",
      subTitle:
        "Preencha suas preferências e receba sugestões personalizadas para você com base na IA",
    },
    {
      icon: service2,
      title: "Viagens Padrões",
      subTitle: "Indique a Origem e Destino e encontre as melhores opções",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service" key={index}>
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas, uma para cada serviço */
  height: 50vh; /* A seção ocupa 150% da altura da tela */
  gap: 0; /* Remove o espaçamento entre os serviços */
  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    text-align: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 4rem; /* Ajusta o tamanho do ícone */
      }
    }
    h3 {
      font-size: 1.5rem;
      color: #333;
    }
    p {
      font-size: 1rem;
      color: #555;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Em telas menores, coloca os serviços em uma única coluna */
    height: auto; /* Ajusta a altura automaticamente */
  }
`;
