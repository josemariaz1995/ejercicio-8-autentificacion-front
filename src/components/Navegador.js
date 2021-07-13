import { NavLink } from "react-router-dom";

export const Navegador = (props) => {
  const { log, setLog } = props;
  return (
    <ul>
      <NavLink to="login">
        <li>Login</li>
      </NavLink>

      <>
        <NavLink to="inicio">
          <li>Inicio</li>
        </NavLink>
        <NavLink to="listado">
          <li>Listado</li>
        </NavLink>
        {log && <button onClick={() => setLog(false)}>Deslogear</button>}
      </>
    </ul>
  );
};
