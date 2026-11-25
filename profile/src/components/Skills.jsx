const Skills = ({ skills }) => {
  return (
    <section className="section">
      <h2>Skills</h2>
      <ul>
        <li>{skills[0]}</li>
        <li>{skills[1]}</li>
        <li>{skills[2]}</li>
        <li>{skills[3]}</li>
      </ul>
    </section>
  );
};

export default Skills;
