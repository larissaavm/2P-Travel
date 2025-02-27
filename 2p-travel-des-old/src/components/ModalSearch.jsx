import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

export default function Modal({ onClose }) {
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    estiloViagem: "",
    atmosfera: "",
    transporte: "",
    limiteDistancia: "",
    clima: "",
    hospedagem: "",
    busca: "",
    orcamento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent ref={modalRef}>
        <h2>Detalhes da Busca</h2>

        <FormGroup>
          <label>Qual é o seu estilo de viagem?</label>
          <select name="estiloViagem" value={formData.estiloViagem} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="praia">Praia</option>
            <option value="montanha">Montanha</option>
            <option value="cidade">Cidade</option>
            <option value="campo">Campo</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Qual a atmosfera que você busca?</label>
          <select name="atmosfera" value={formData.atmosfera} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="sofisticado">Sofisticado</option>
            <option value="medio">Médio</option>
            <option value="simples">Simples</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Como prefere viajar?</label>
          <select name="transporte" value={formData.transporte} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="carro">De carro</option>
            <option value="aviao">De avião</option>
            <option value="indiferente">Indiferente</option>
          </select>
        </FormGroup>

        {formData.transporte === "carro" && (
          <FormGroup>
            <label>Se for de carro, qual o limite de distância?</label>
            <input
              type="text"
              name="limiteDistancia"
              value={formData.limiteDistancia}
              onChange={handleChange}
              placeholder="Exemplo: 300 km"
            />
          </FormGroup>
        )}

        <FormGroup>
          <label>Qual o tipo de hospedagem que você prefere?</label>
          <select name="hospedagem" value={formData.hospedagem} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="hotel">Hotel</option>
            <option value="resort">Resort</option>
            <option value="pousada">Pousada</option>
            <option value="airbnb">Airbnb</option>
            <option value="camping">Camping</option>
          </select>
        </FormGroup>

        <Button onClick={onClose}>Fechar</Button>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
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

const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  select, input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #4361ee;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #023e8a;
  }
`;

