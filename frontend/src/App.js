import React, { useState } from "react";
import "./css/homeForm.css";

const TravelForm = () => {
  const [formData, setFormData] = useState({
    origem: "",
    dataViagem: "",
    dataRetorno: "",
    tipoDestino: "Praia",
    adultos: 1,
    criancas: 0,
    pets: false,
    valorEstimado: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Para gerenciar o estado de envio
  const [responseOptions, setResponseOptions] = useState([]); // Resposta da API com opções

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/buscar-viagens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }

      const data = await response.json();

      // Faz o parsing do campo "opcoes"
      const parsedOptions = JSON.parse(data.opcoes).options;

      // Define as opções retornadas pela API
      setResponseOptions(parsedOptions || []);
    } catch (error) {
      console.error("Erro ao buscar opções:", error);
      setResponseOptions([]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="travel-form-container">
      <h1 className="title">Planeje sua próxima viagem</h1>
      <form onSubmit={handleSubmit} className="travel-form">
        <div className="form-group">
          <label>Origem:</label>
          <input
            type="text"
            name="origem"
            value={formData.origem}
            onChange={handleChange}
            required
            placeholder="Digite sua cidade de origem"
          />
        </div>
        <div className="form-group">
          <label>Data de Viagem:</label>
          <input
            type="date"
            name="dataViagem"
            value={formData.dataViagem}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Data de Retorno:</label>
          <input
            type="date"
            name="dataRetorno"
            value={formData.dataRetorno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tipo de Destino:</label>
          <select
            name="tipoDestino"
            value={formData.tipoDestino}
            onChange={handleChange}
          >
            <option value="Praia">Praia</option>
            <option value="Montanha">Montanha</option>
          </select>
        </div>
        <div className="form-group">
          <label>Quantidade de Adultos:</label>
          <input
            type="number"
            name="adultos"
            value={formData.adultos}
            onChange={handleChange}
            min="1"
          />
        </div>
        <div className="form-group">
          <label>Quantidade de Crianças:</label>
          <input
            type="number"
            name="criancas"
            value={formData.criancas}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div className="form-group checkbox-group">
          <label>
            Pets:
            <input
              type="checkbox"
              name="pets"
              checked={formData.pets}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>Valor Estimado Total:</label>
          <input
            type="number"
            name="valorEstimado"
            value={formData.valorEstimado}
            onChange={handleChange}
            min="0"
            step="0.01"
            placeholder="Ex: R$ 5.000.00"
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {responseOptions.length > 0 && (
        <div className="response-container">
          <h2>Opções de Viagem:</h2>
          <ul>
            {responseOptions.map((option, index) => (
              <li key={index} className="option-item">
                <h3>Opção {index + 1}</h3>
                <p>
                  <strong>Hospedagem:</strong> {option.hospedagem}
                </p>
                <p>
                  <strong>Transporte:</strong> {option.trasporte}
                </p>
                <p>
                  <strong>Atividades:</strong> {option.atividades}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TravelForm;
