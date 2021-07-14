import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Listados } from "./components/Listado";
import { Login } from "./components/Login";
import { Navegador } from "./components/Navegador";
import { PaginaNoEcontrada } from "./components/PaginaNoEncontrada";

function App() {
  require("dotenv").config();
  const [log, setLog] = useState(false);
  const [datos, setDatos] = useState([]);
  const [credenciales, setCredenciales] = useState({});
  const [error, setError] = useState(false);
  const urlApi =
    process.env.URL_API || "https://ejercicio-node-login.herokuapp.com/";
  const login = "usuarios/login";
  const items = "items/listado";

  const getItems = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(urlApi + items, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const datosApi = await response.json();
    setDatos(datosApi);
  };
  const crearAutentificacion = async (username, password) => {
    setCredenciales({
      username,
      password,
    });
    const response = await fetch(urlApi + login, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credenciales),
    });
    if (response.ok) {
      const token = await response.json();
      localStorage.setItem("token", token);
    }
  };

  return (
    <>
      <header>
        <Navegador log={log} setLog={setLog} />
      </header>
      <main>
        <Switch>
          <Route path="/usuarios/login" exact>
            <Login
              setLog={setLog}
              crearAutentificacion={crearAutentificacion}
              getItems={getItems}
              setError={setError}
            />
          </Route>
          <Route path="/usuarios/inicio" exact>
            {log && <Inicio />}
          </Route>
          <Route path="/items/listado" exact>
            {log && <Listados datos={datos} />}
          </Route>
          <Route path="/">
            <Redirect to="/usuarios/login" />
          </Route>
          <Route path="**" exact>
            <PaginaNoEcontrada />
          </Route>
        </Switch>
        {error && error}
      </main>
    </>
  );
}

export default App;
