import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>PetCare - Clínica Veterinária</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/booking">Agendamento</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
