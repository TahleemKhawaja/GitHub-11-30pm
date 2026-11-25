import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DiplaySum from './components/DiplaySum';

const App = () => {
  const skills = ['HTML', 'Css', 'JS', 'Python'];
  // const about = {
  //   title: 'Web Developer',
  //   speciality: 'MERN',
  // };
  // const name = 'Aaqib';
  function Sum(a, b) {
    console.log(a + b);
  }
  return (
    <div>
      <Navbar />
      <DiplaySum handleSum={Sum} />
      <Hero name="Aaqib" />
      <About />
      <Skills skills={skills} />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
