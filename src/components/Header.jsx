import React from "react";
import { useNavigate } from "react-router-dom";
import StarWarsLogo from "../assets/StarWarsLogo.png";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-black text-white pl-5 flex items-center justify-between">
      <div className="flex items-center">
        <img src={StarWarsLogo} alt="Star Wars Logo" className="pr-4" width={90} />
      </div>
      <div className="pr-5">
        <Button variant="ghost" onClick={() => navigate("/favorites")}>
          Favorites
        </Button>
      </div>
    </header>
  );
};

export default Header;