import React from "react";
import Button from "./Button";

const Form = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ownerName">Tutor:</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Nome do Tutor"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="petName">Pet:</label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              placeholder="Nome do Pet"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Data:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Horário:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Pendente">Pendente</option>
              <option value="Confirmado">Confirmado</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
        </div>

        <div className="form-footer">
          <Button text="Adicionar" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
