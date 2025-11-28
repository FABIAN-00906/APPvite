export default function CabeceraCV(props) {
  return (
    <header>
      <img src={props.contacto.foto} alt="Foto" />
      <h1>{props.nombre}</h1>
      <h2>{props.cargo}</h2>
      <p>{props.ciudad}</p>
    </header>
  );
}
