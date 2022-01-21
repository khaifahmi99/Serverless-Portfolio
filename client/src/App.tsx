import Contact from './views/Contact';
import Education from './views/Education';
import Experience from './views/Experience';
import Footer from './views/Footer';
import Home from './views/Home';
import Project from './views/Project';
import Skill from './views/Skill';
import Testimonial from './views/Testimonial';

import meta from './meta.json';

function App() {
  console.log(meta);

  return (
    <>
      <Home />
      <Experience />
      <Project />
      <Education />
      <Skill />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
