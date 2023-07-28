import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import Man from "../assets/users/man.jpg";
import Woman from "../assets/users/woman.jpg";

const Home = () => {
  return (
    <main className="container home">
      <h1>
        Bienvenue sur <span>SportSee</span>
      </h1>
      <p>Une application mobile dédiée au coaching sportif</p>
      <div className="users">
        <NavLink to="user/12">
          <Card icon={Man} info="John" text="Consulter le profil" />
        </NavLink>
        <NavLink to="user/18">
          <Card icon={Woman} info="Jane" text="Consulter le profil" />
        </NavLink>
      </div>
    </main>
  );
};

export default Home;