import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFirebaseApp } from 'reactfire';
import { provider } from '../../firebaseProyect';
import 'firebase/auth'
import "./Header.css";

const Header = () => {
  const firebase = useFirebaseApp();
  const [userLogged, setUserLogged] = useState(false);
  const history = useHistory();

  const goToProducts = (e) => {
    e.preventDefault();
    const [{ value }] = e.target;
    const trimValue = value.trim();
    history.push("/products/" + trimValue, { search: trimValue });
    localStorage.setItem("searchValue", trimValue);
  };

  const loggin = async () => {
    localStorage.setItem("isLogged","true");
    await firebase.auth().signInWithPopup(provider);
    window.location.reload();
  };

  useEffect(() => {
    const isLoggedText = localStorage.getItem("isLogged");
    setUserLogged(isLoggedText === "true")
  }, []);

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
        <button className="btn btn-warning" onClick={loggin}>Iniciar sesión</button>
      )}
    </div>
  );
};

export default Header;
