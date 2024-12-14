import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Form from "../components/Form";

const Booking = () => {
  const [appointments, setAppointments] = useState([]); // Lista de agendamentos
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    date: "",
    time: "",
    status: "Pendente"
  });
  const [loading, setLoading] = useState(true); // Indicador de carregamento

  // Carregar dados do JSON ao montar o componente
  useEffect(() => {
    fetch("/data/appointments.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar agendamentos");
        }
        return response.json();
      })
      .then((data) => {
        setAppointments(data); // Define os agendamentos iniciais
        setLoading(false); // Finaliza o carregamento
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Finaliza o carregamento mesmo com erro
      });
  }, []);

  // Gerenciar mudanças nos campos do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Adicionar um novo agendamento
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: appointments.length + 1,
      ...formData
    };
    setAppointments([...appointments, newAppointment]); // Atualiza a lista
    setFormData({
      ownerName: "",
      petName: "",
      date: "",
      time: "",
      status: "Pendente"
    }); // Limpa o formulário
  };

  return (
    <div className="booking">
      <h2>Gestão de Agendamentos</h2>

      {/* Componente Form */}
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* Lista de Agendamentos */}
      <div className="booking-appointments">
        {loading ? (
          <p>Carregando agendamentos...</p>
        ) : (
          appointments.map((appointment) => (
            <Card
              key={appointment.id}
              title={`Agendamento #${appointment.id}`}
              description={`Tutor: ${appointment.ownerName}\nPet: ${appointment.petName}\nData: ${appointment.date}\nHorário: ${appointment.time}\nStatus: ${appointment.status}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Booking;
