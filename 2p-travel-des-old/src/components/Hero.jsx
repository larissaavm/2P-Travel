import React, { useState } from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";
import Modal from "./ModalSearch";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withDestination, setWithDestination] = useState(true);
  const [formData, setFormData] = useState({
    destination: "",
    departure: "",
    return: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Recomendações Inteligentes</h1>
          <br />
          <h1>para Viagens planejadas</h1>
          <p>
          Sem destino em mente? Responda algumas perguntas e nós encontramos a viagem perfeita para você!
          </p>
        </div>
        <div className="options">
          <p>Já escolheu seu destino?</p>
          <div className="buttons">
            <button
              className={withDestination ? "active" : ""}
              onClick={() => setWithDestination(true)}
            >
              Sim
            </button>
            <button
              className={!withDestination ? "active" : ""}
              onClick={() => {
                setWithDestination(false);
                handleSearchClick();
              }}
            >
              Não
            </button>
          </div>
        </div>
        <div className="search">
        <div className="container">
            <label htmlFor="origem">Origem</label>
            <input             
                name="origem"
                id="origem"
                type="text" 
                placeholder="Informe sua Origem" />
          </div>
          {withDestination && (
            <div className="container">
              <label htmlFor="destination">Destino</label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder="Informe seu Destino"
                value={formData.destination}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="container">
            <label htmlFor="departure">Ida</label>
            <input
              type="date"
              name="departure"
              id="departure"
              value={formData.departure}
              onChange={handleInputChange}
            />
          </div>
          <div className="container">
            <label htmlFor="return">Volta</label>
            <input
              type="date"
              name="return"
              id="return"
              value={formData.return}
              onChange={handleInputChange}
            />
          </div>
          <button>Buscar</button>
        </div>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }

    .options {
      p {
        color: white;
        font-size: 1.2rem;
      }
      .buttons {
        margin-top: 0.5rem;
        display: flex;
        gap: 1rem;
        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border: 2px solid white;
          background-color: transparent;
          color: white;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &.active {
            background-color: white;
            color: #03045e;
          }
          &:hover {
            background-color: #ffffff90;
            color: #03045e;
          }
        }
      }
    }

    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;

        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .options {
        p {
          font-size: 1rem;
        }
        .buttons {
          button {
            font-size: 0.9rem;
            padding: 0.5rem;
          }
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;
