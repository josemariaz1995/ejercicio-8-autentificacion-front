import { NavLink, useHistory } from "react-router-dom";

export const Navegador = (props) => {
  const { log, setLog } = props;
  const history = useHistory();
  const desloguearse = () => {
    history.push("/usuarios/login");
    setLog(false);
  };
  return (
    <ul>
      <NavLink to={!log ? "/usuarios/login" : "/usuarios/inicio"}>
        <li>Login</li>
      </NavLink>

      <>
        <NavLink to={!log ? "/usuarios/login" : "/usuarios/inicio"}>
          <li>Inicio</li>
        </NavLink>
        <NavLink to={!log ? "/usuarios/login" : "/items/listado"}>
          <li>Listado</li>
        </NavLink>
        {log && <button onClick={desloguearse}>Deslogear</button>}
      </>
    </ul>
  );
};
