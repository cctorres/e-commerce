import React, { useState, useEffect } from "react";
import { useFirebaseApp, useUser } from "reactfire";
import "firebase/firestore";
import "./Products.css";

const Products = () => {
  const firebase = useFirebaseApp();
  const { data: user } = useUser();
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);

  const fecthApi = async () => {
    const searchValue = localStorage.getItem("searchValue");
    const offset = page * 20;
    const url =
      "https://api.mercadolibre.com/sites/MCO/search?q=" +
      searchValue +
      "&category=MCO1430&limit=20&offset=" +
      offset;
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    setProducts(responseJSON);
    console.log("offset: " + offset);
    console.log("page: " + page);
  };

  useEffect(() => {
    fecthApi();
  }, [page]);

  const addToCar = async (product) => {
    if (user) {
      await firebase.firestore().collection(user.uid).add({
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

  const prevPage = () => {
    setPage(page - 1);
    fecthApi();
  };

  const nextPage = () => {
    setPage(page + 1);
    fecthApi();
  };

  if (page === 1) {
    return (
      <div className="products-container">
        <div className="pagination">
          <button className="btn-dark">{page}</button>
          <button className="btn-dark" onClick={() => nextPage()}>
            Siguiente
          </button>
        </div>
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
  } else {
    return (
      <div className="products-container">
        <div className="pagination">
          <button className="btn-dark" onClick={() => prevPage()}>
            Anterior
          </button>
          <button className="btn-dark">{page}</button>
          <button className="btn-dark" onClick={() => nextPage()}>
            Siguiente
          </button>
        </div>
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
  }
};

export default Products;
