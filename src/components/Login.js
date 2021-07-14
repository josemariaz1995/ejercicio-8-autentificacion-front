import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const { setLog, crearAutentificacion, setError, getItems } = props;
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loguearse = async (e) => {
    e.preventDefault();
    try {
      await crearAutentificacion(username, password);
      setLog(true);
      await getItems();
      history.push("/usuarios/inicio");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <section>
      <form onSubmit={loguearse}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Logearse</button>
      </form>
    </section>
  );
};
