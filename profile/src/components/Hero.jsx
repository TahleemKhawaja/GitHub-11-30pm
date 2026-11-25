const Hero = ({ name, age = 25 }) => {
  return (
    <section className="hero">
      <h1>{name}</h1>
      <p>{age}</p>
      <p>MERN Stack Trainer and Web Developer</p>
      <button className="btn">Hire Me</button>
    </section>
  );
};

export default Hero;
