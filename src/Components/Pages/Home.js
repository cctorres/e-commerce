import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import man from "../../assets/images/man.jpg";
import woman from "../../assets/images/woman.jpg";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductPromo from "./ProductsPromo";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="home-container">
      <Carousel>
        <Carousel.Item>
          <img className="banner-home" src={banner1} alt="First slide" />
          <div className="carousel-caption" data-aos="fade-down">
            <h3>Promociones de otoño</h3>
            <p>Aprovecha al máximo nuestros precios especiales de temporada</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner-home" src={banner2} alt="Second slide" />
          <div className="carousel-caption" data-aos="fade-down">
            <h3>¡ Comparte y disfruta !</h3>
            <p>
              Esparce esa felicidad que te acompaña a cada instante con tus
              queridos
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="woman-container">
        <img className="home-promo-container" src={woman} alt="woman"></img>
        <div className="product-home-container">
          <ProductPromo searchValue="woman" />
        </div>
      </div>
      <div className="man-container">
        <div className="product-home-container">
          <ProductPromo searchValue="man" />
        </div>
        <img className="home-promo-container" src={man} alt="man"></img>
      </div>
    </div>
  );
};

export default Home;
