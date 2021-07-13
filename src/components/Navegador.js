import { NavLink, useHistory } from "react-router-dom";

export const Navegador = (props) => {
  const { log, setLog } = props;
  const history = useHistory();
  const desloguearse = () => {
    history.push("/login");
    setLog(false);
  };
  return (
    <ul>
      <NavLink to={!log ? "login" : "inicio"}>
        <li>Login</li>
      </NavLink>

      <>
        <NavLink to={!log ? "login" : "inicio"}>
          <li>Inicio</li>
        </NavLink>
        <NavLink to={!log ? "login" : "listado"}>
          <li>Listado</li>
        </NavLink>
        {log && <button onClick={desloguearse}>Deslogear</button>}
      </>
    </ul>
  );
};
