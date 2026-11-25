const About = ({ about = {} }) => {
  // const detail = { ...about, title: 'DA' };
  // console.log(detail);

  return (
    <section className="section">
      <h2>About Me</h2>
      <p>
        I am a {about.title} who loves building apps with the {about.speciality}{' '}
        stack and teaching others how to code.
      </p>
    </section>
  );
};

export default About;
