import React from "react";
import { Link } from "react-router-dom";

/**
 * Returns a React component displays the Error page
 * @returns a React Components
 */

const Oups = () => {
  return (
    <main className="container oups">
        <p>Oups ! Aucune données renvoyées</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
};

export default Oups;