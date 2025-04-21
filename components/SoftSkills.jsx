import React from 'react';

const SoftSkills = () => {
  const skills = ["Responsabilidad", "Trabajo en equipo", "Comunicación"];

  return (
    <section id="softskills">
      <h2>Soft Skills</h2>
      <ul>
        {skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </section>
  );
};

export default SoftSkills;

