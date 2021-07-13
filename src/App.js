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

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState(false);
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(false);
  const history = useHistory("/login");

  const crearCredenciales = () => {
    const credenciales = {
      username,
      password,
    };
  };

  return (
    <>
      <Router>
        <header>
          <Navegador log={log} setLog={setLog} history={history} />
        </header>
        <main>
          <Switch>
            <Route path="/login" exact>
              <Login
                setPassword={setPassword}
                setUsername={setUsername}
                setLog={setLog}
                history={history}
              />
            </Route>
            <Route path="/inicio" exact>
              {log && <Inicio username={username} />}
            </Route>
            <Route path="/listado" exact>
              {log && <Listados datos={datos} />}
            </Route>
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
