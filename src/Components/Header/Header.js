import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [userLogged, setUserLogged] = useState(false);
  const history = useHistory();

  const goToProducts = (e) => {
    e.preventDefault();
    const [{ value }] = e.target;
    const trimValue = value.trim();
    history.push("/products/" + trimValue, { search: trimValue });
  };

  return (
    <div className="header-container">
      <form className="search form d-flex" onSubmit={goToProducts}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar aquí producto"
          aria-label="Search"
          required
        />
        <div className="button-search-container">
          <button className="btn btn-outline-warning" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      {userLogged ? (
        <button className="btn btn-outline-warning">
          <i className="fas fa-user-circle"></i>
        </button>
      ) : (
        <button className="btn btn-outline-warning">Iniciar sesión</button>
      )}
    </div>
  );
};

export default Header;
