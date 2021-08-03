import React, { useEffect, useState } from "react";
import { useFirebaseApp, useUser } from "reactfire";
import { db } from "../../firebaseProyect";

const Car = () => {
  const { data: user } = useUser();
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    if (user) {
      let uID = user.uid;
      const data = await db.collection("car-"+uID).get();
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDelete = async (product) => {
    if (user) {
      let uID = user.uid;
      await db.collection(uID).doc(product.id).delete();
      fetchData();
    }
  };

  return (
    <div className="card-view text-center mt-5">
      <div className="row">
        {cards.map((product) => {
          return (
            <div className="col">
              <div className="card">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn-profile btn-dark"
                    onClick={() => onDelete(product)}
                  >
                    Quitar del carrito
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn-dark bg-dark">Comprar</button>
    </div>
  );
};

export default Car;
