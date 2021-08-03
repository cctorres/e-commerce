import React, { useState, useEffect } from "react";
import { useFirebaseApp, useUser } from "reactfire";
//import { db } from "../../firebaseProyect";
import "firebase/auth";
import "./Profile.css";

const Profile = () => {
  const firebase = useFirebaseApp();
  const { data: user } = useUser();
  const [isLoggedUser, setIsLoggedUser] = useState(null);
  const [userData, setUserData] = useState({
    name: "name",
    email: "email",
    phone: "phone",
    country: "country",
    city: "city",
    address: "address",
  });  
  //const [cards, setCards] = useState([]);

  /*const fetchData = async () => {
    if (user) {
      let uID = user.uid;
      const data = await db.collection("user-"+uID).get();
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
  };*/

  const fetchData = () => {
    const userText = localStorage.getItem("userProfile");
    if(userText !== null){
      setUserData(JSON.parse(userText))
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  
  const updateUser = (event) => {
    event.preventDefault();
    localStorage.setItem("userProfile",JSON.stringify(userData));
  }

  /*const updateUser = async (event) => {
    event.preventDefault();
    await firebase.firestore().collection("user-"+user.uid).add({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      country: userData.country,
      city: userData.city,
      address: userData.address
    });
    window.alert("Producto agregado");
  };*/

  const logOut = async () => {
    await firebase.auth().signOut();
    localStorage.setItem("isLogged", "false");
    window.location.reload();
  };

  useEffect(() => {
    setIsLoggedUser(user);
  }, []);

  return (
    <div className="profile-container">
      {!isLoggedUser ? (
        <p>Cargando...</p>
      ) : (
        <div className="profile-container-c">
          <div className="user-data-container">
            <div className="form-profile-container">
              <form onSubmit={updateUser}>
                <div className="data-user-form">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder={userData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder={userData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    name="phone"
                    type="text"
                    className="form-control"
                    placeholder={userData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="data-user-form">
                  <input
                    name="country"
                    type="text"
                    className="form-control"
                    placeholder={userData.country}
                    onChange={handleInputChange}
                  />
                  <input
                    name="city"
                    type="text"
                    className="form-control"
                    placeholder={userData.city}
                    onChange={handleInputChange}
                  />
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    placeholder={userData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <button className="btn btn-dark" type="submit">
                  Actualizar
                </button>
              </form>
            </div>
            <div className="image-profile-container">
              <img
                className="image-profile-gif"
                src="https://cdn.pixabay.com/photo/2020/07/30/08/53/store-5449796_960_720.png"
                alt="gif"
              />
            </div>
          </div>
          <div>
            <button className="btn-dark" onClick={logOut}>
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
