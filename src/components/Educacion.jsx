export default function Educacion({ estudios }) {
  return (
    <section>
      <h3>Educación</h3>

      {estudios.map(({ titulo, institucion, año }, index) => (
        <div key={index}>
          <strong>{titulo}</strong> – {institucion}
          <br />
          <small>{año}</small>
        </div>
      ))}
    </section>
  );
}
