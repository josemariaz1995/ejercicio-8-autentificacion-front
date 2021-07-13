import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const { setUsername, setPassword, setLog } = props;
  const history = useHistory();
  const loguearse = (e) => {
    e.preventDefault();
    setLog(true);
    history.push("/inicio");
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
