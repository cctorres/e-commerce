import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-colums">
        <div className="our-politics">
          <p>POLITICAS</p>
          <p>Politicas de privacidad</p>
          <p>Politicas de cambio</p>
          <p>Politicas de envio</p>
          <p>Términos y condiciones</p>
          <p>Responsabilidad social</p>
        </div>
        <div className="about-us">
          <p>SOBRE NOSOTROS</p>
          <p>Encuentra tu tienda</p>
          <p>Contáctanos</p>
          <p>Trabaja con nosotros</p>
        </div>
        <div className="contact-us">
          <p>SÍGUENOS EN:</p>
          <div className="contact-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="copyright-container text-center">
        ©Copyright Colombia. Todos los derechos reservados
      </div>
    </div>
  );
};

export default Footer;
