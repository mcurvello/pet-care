import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"; // Arquivo de estilos globais (opcional)
import App from "./App"; // Importa o componente principal

// Obtém a referência ao elemento <div id="root"> no HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o componente principal <App /> dentro da div #root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
