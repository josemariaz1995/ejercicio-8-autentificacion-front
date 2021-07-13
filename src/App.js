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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState(false);
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(false);

  const crearCredenciales = () => {
    const credenciales = {
      username,
      password,
    };
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
              setPassword={setPassword}
              setUsername={setUsername}
              setLog={setLog}
            />
          </Route>
          <Route path="/usuarios/inicio" exact>
            {log && <Inicio username={username} />}
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
