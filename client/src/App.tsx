import ProfileProvider from './ProfileContext';
import Contact from './views/Contact';
import Education from './views/Education';
import Experience from './views/Experience';
import Footer from './views/Footer';
import Home from './views/Home';
import Project from './views/Project';
import Skill from './views/Skill';
import Testimonial from './views/Testimonial';

function App() {
  return (
    <ProfileProvider>
      <Home />
      <Experience />
      <Project />
      <Education />
      <Skill />
      <Testimonial />
      <Contact />
      <Footer />
    </ProfileProvider>
  );
}

export default App;
