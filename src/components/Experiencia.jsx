export default function Experiencia({ experiencias }) {
  return (
    <section>
      <h3>Experiencia</h3>

      {experiencias.map((exp, index) => (
        <div key={index}>
          <strong>{exp.cargo}</strong> – {exp.empresa}
          <br />
          <small>{exp.periodo}</small>
        </div>
      ))}
    </section>
  );
}
