import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      {/* Introdução */}
      <section className="home-welcome">
        <h1>Bem-vindo ao PetCare!</h1>
        <p>
          Cuidar do seu pet é a nossa prioridade. <br /> Oferecemos serviços de qualidade para garantir
          o bem-estar do seu amigo de quatro patas.
        </p>
        <img
          src="/img/cachorro-unsplash.jpg" // Substituir pelo URL da imagem de pets
          alt="Diversos tipos de pets felizes"
          className="home-image"
        />
        <Link to="/booking" className="btn-primary">
          Agendar Consulta
        </Link>
      </section>
    </main>
  );
};

export default Home;
