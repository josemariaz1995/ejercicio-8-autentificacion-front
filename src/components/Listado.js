export const Listados = (props) => {
  const { datos } = props;
  return (
    <section>
      <ul>
        {datos.length !== 0
          ? datos.map((dato, i) => <li key={i}>{dato}</li>)
          : "No hay datos"}
      </ul>
    </section>
  );
};
