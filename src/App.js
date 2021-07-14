import { useEffect, useState } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Listados } from "./components/Listado";
import { Login } from "./components/Login";
import { Navegador } from "./components/Navegador";
import { PaginaNoEcontrada } from "./components/PaginaNoEncontrada";

function App() {
  const [log, setLog] = useState(false);
  const [datos, setDatos] = useState([]);
  const [credenciales, setCredenciales] = useState({});
  const [error, setError] = useState(false);
  const urlApi = "http://localhost:4000/";
  const login = "usuarios/login";
  const items = "items/listado";

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
    const token = await response.json();
    console.log(token);
    localStorage.setItem("token", token);
  };
  const getItems = async () => {};

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
      </main>
    </>
  );
}

export default App;
