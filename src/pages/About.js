import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const About = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/team.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados da equipe.");
        }
        return response.json();
      })
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Sobre Nós</h2>
      <p>
        No PetCare, somos apaixonados por oferecer os melhores cuidados para os seus pets. Nossa equipe
        é composta por veterinários experientes, prontos para ajudar em qualquer necessidade.
      </p>

      <h3>Conheça Nossa Equipe</h3>
      {loading ? (
        <p>Carregando informações da equipe...</p>
      ) : (
        <div className="team-list">
          {team.map((member) => (
            <Card
              key={member.id}
              title={member.name}
              description={`${member.role} - ${member.description}`}
              image={member.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
