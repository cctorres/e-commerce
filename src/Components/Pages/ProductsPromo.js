import React, { useState, useEffect } from "react";
import { useFirebaseApp, useUser } from "reactfire";
import "firebase/firestore";
import "./Products.css";

const ProductsPromo = ({ searchValue }) => {
  const firebase = useFirebaseApp();
  const { data: user } = useUser();
  const [products, setProducts] = useState();

  const fecthApi = async () => {
    const url =
      "https://api.mercadolibre.com/sites/MCO/search?q=" +
      { searchValue }.searchValue +
      "&category=MCO1430&limit=2";
    const response = await fetch(url);
    const responseJSON = await response.json();
    setProducts(responseJSON);
  };

  useEffect(() => {
    fecthApi();
  }, []);

  const addToCar = async (product) => {
    if (user) {
      await firebase.firestore().collection("car-"+user.uid).add({
        name: product.title,
        id: product.id,
        price: product.price,
        thumbnail: product.thumbnail,
      });
      alert("Producto agregado");
    } else {
      alert("Por favor, inica sesión primero");
    }
  };

  return (
    <div className="products-container">
      <div className="row">
        {!products
          ? "Cargando..."
          : products.results.map((product) => {
              return (
                <div key={product.id} className="col">
                  <div className="card">
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-title">{product.title}</p>
                      <p className="card-text">${product.price}</p>
                      <button
                        className="btn-profile btn-dark"
                        onClick={() => addToCar(product)}
                      >
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProductsPromo;
