import React from 'react';

const Estudios = () => {
  const estudios = [
    { nombre: "Tecnicatura Universitaria en Programación", lugar: "UTN FRT" }
  ];

  return (
    <section id="estudios">
      <h2>Estudios</h2>
      <ul>
        {estudios.map((e, i) => (
          <li key={i}>{e.nombre} - {e.lugar}</li>
        ))}
      </ul>
    </section>
  );
};

export default Estudios;
