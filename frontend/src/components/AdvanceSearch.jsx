import React, { useState } from "react";
import styled from "styled-components";

export default function Modal({ onClose }) {
  const [formData, setFormData] = useState({
    tipoDestino: "",
    estiloViagem: "",
    transporte: "",
    limiteDistancia: "",
    consumoCarro: "",
    clima: "",
    estacao: "",
    hospedagem: "",
    busca: "",
    orcamento: "",
    periodoViagem: "",
    duracaoViagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Detalhes da Busca</h2>
        
        {/* Estilo de viagem */}
        <div>
          <label>Qual é o seu estilo de viagem?</label>
          <select
            name="estiloViagem"
            value={formData.estiloViagem}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="praia">Praia</option>
            <option value="montanha">Montanha</option>
            <option value="cidade">Cidade</option>
            <option value="campo">Campo</option>
          </select>
        </div>

        {/* Atmosfera */}
        <div>
          <label>Qual a atmosfera que você busca?</label>
          <select
            name="atmosfera"
            value={formData.atmosfera}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="sofisticado">Sofisticado (luxo, conforto, requinte)</option>
            <option value="medio">Médio (equilíbrio entre preço e conforto)</option>
            <option value="simples">Simples (informal, com foco em experiências e natureza)</option>
          </select>
        </div>

        {/* Forma de transporte */}
        <div>
          <label>Como prefere viajar?</label>
          <select
            name="transporte"
            value={formData.transporte}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="carro">De carro</option>
            <option value="aviao">De avião</option>
            <option value="indiferente">Indiferente</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        {/* Limite de distância se for de carro */}
        {formData.transporte === "carro" && (
          <div>
            <label>Se for de carro, qual é o limite de distância que você está disposto(a) a percorrer?</label>
            <input
              type="text"
              name="limiteDistancia"
              value={formData.limiteDistancia}
              onChange={handleChange}
              placeholder="Exemplo: 300 km, 500 km"
            />
          </div>
        )}


        {/* Clima */}
        <div>
          <label>Você prefere qual tipo de clima?</label>
          <select
            name="clima"
            value={formData.clima}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="calor">Calor</option>
            <option value="frio">Frio</option>
            <option value="indiferente">Indiferente</option>
          </select>
        </div>

        {/* Acomodações e experiências */}
        <div>
          <label>Qual o tipo de hospedagem que você prefere?</label>
          <select
            name="hospedagem"
            value={formData.hospedagem}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="hotel">Hotel</option>
            <option value="resort">Resort</option>
            <option value="pousada">Pousada</option>
            <option value="airbnb">Airbnb</option>
            <option value="camping">Camping</option>
          </select>
        </div>

        <div>
          <label>Você está buscando mais?</label>
          <select
            name="busca"
            value={formData.busca}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="aventura">Aventura</option>
            <option value="relaxamento">Relaxamento</option>
            <option value="cultura">Cultura</option>
            <option value="gastronomia">Gastronomia</option>
            <option value="entretenimento">Entretenimento</option>
          </select>
        </div>

        {/* Orçamento */}
        <div>
          <label>Qual é o seu orçamento aproximado para a viagem?</label>
          <select
            name="orcamento"
            value={formData.orcamento}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="menos">Menos de R$ 1.000</option>
            <option value="entre">Entre R$ 1.001 e R$ 5.000</option>
            <option value="mais">Mais de R$ 5.000</option>
          </select>
        </div>

        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;

  h2 {
    margin-bottom: 1rem;
    color: #4361ee;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }

  select, input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 0.3rem;
    background-color: #4361ee;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
`;
