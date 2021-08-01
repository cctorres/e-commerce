import React, { useState, useEffect } from "react";
import { useFirebaseApp, useUser } from "reactfire";
import 'firebase/auth';

const Profile = () => {
    const firebase = useFirebaseApp();
    const { data: user } = useUser();
    const [isLoggedUser, setIsLoggedUser] = useState(null);
    const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

    const handleInputChange = (event) => {
        setUserData({
        ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + userData.name + " " + userData.email);
  };

  const logOut = async() => {
      await firebase.auth().signOut();
      localStorage.setItem("isLogged","false");
      window.location.reload();
  }

  useEffect(() => {
      setIsLoggedUser(user);
  }, []);

  return (
    <div className="profile-container">
      {!user ? (
        <p>Cargando...</p>
      ) : (
        <div className="user-data-container">
          <div className="user-personal-data">
            <form className="row" onSubmit={enviarDatos}>
              <div className="col-md-3">
                <input
                  type="text"
                  placeholder={user.displayName}
                  className="form-control"
                  onChange={handleInputChange}
                  name="name"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  placeholder={user.email}
                  className="form-control"
                  onChange={handleInputChange}
                  name="email"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
          <div className="user-credit-data"></div>
          <div className="user-adress-data"></div>
          <button onClick={logOut}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
