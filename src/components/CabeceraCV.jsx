export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <header>
      <img src={contacto.foto} alt="Foto" />
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <p>{ciudad}</p>
    </header>
  );
}
