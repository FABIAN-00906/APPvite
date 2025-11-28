
import React from "react";

export default function Experiencia() {
  const experiencia = [
    { id: 1, titulo: "Proyecto personal: Sistema de Gestión de Notas", entidad: "Personal", periodo: "2024", descripcion: "Aplicación web desarrollada con HTML, CSS y JS para gestionar notas académicas." },
    { id: 2, titulo: "Proyecto escolar: Página institucional I.E. FESA", entidad: "I.E. FESA", periodo: "2023", descripcion: "Maquetación completa del sitio web usando CSS Grid y Flexbox." },
    { id: 3, titulo: "Proyecto personal: Portafolio Web", entidad: "Personal", periodo: "2024", descripcion: "Diseño y desarrollo de un portafolio profesional con React y Vite." },
    { id: 4, titulo: "Colaborador junior – Taller de programación SENA", entidad: "SENA", periodo: "2024", descripcion: "Apoyo en actividades de programación básica para estudiantes nuevos." },
    { id: 5, titulo: "Mini-app: ToDo avanzado", entidad: "Personal", periodo: "2023", descripcion: "Aplicación para gestión de tareas con localStorage y filtros." },
    { id: 6, titulo: "Integración API REST (Trabajo académico)", entidad: "Universidad / SENA", periodo: "2024", descripcion: "Consumo de API externa y manejo de estado en el cliente." },
    { id: 7, titulo: "Landing page promocional", entidad: "Proyecto freelance (simulado)", periodo: "2022", descripcion: "Página estática con animaciones CSS y diseño responsivo." },
    { id: 8, titulo: "Sistema de registro de asistentes (hackathon)", entidad: "Hackathon local", periodo: "2023", descripcion: "Pequeña SPA para registrar asistentes y generar reportes." },
    { id: 9, titulo: "Componente UI reutilizable (biblioteca interna)", entidad: "Personal", periodo: "2024", descripcion: "Creación de botones y tarjetas reutilizables con props." },
    { id: 10, titulo: "Práctica CI/CD básica", entidad: "Formación", periodo: "2024", descripcion: "Pipeline simple para despliegue en Netlify / Vercel (simulado)." }
  ];

  if (!experiencia || experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia y Proyectos</h3>
        <p>No se han registrado experiencias ni proyectos.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia y Proyectos</h3>

      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id} style={{ marginBottom: "0.75rem" }}>
            <strong>{exp.titulo}</strong> <em>({exp.periodo})</em>
            <div>{exp.entidad}</div>
            <p style={{ margin: "0.25rem 0 0.5rem 0" }}>{exp.descripcion}</p>
          </li>
        ))}
      </ul>

      <p>
        <em>No cuento con experiencia laboral formal, pero sí con proyectos reales y académicos.</em>
      </p>
    </section>
  );
}
