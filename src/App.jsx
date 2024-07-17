import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home/home.jsx';
import Navigation from './component/navigation/navigation.jsx';
import Skill from './component/skill/skill.jsx';
import Project from './component/project/project.jsx';
import Contact from './component/contact/contact.jsx';
import Welcome from './component/welcome/welcome.jsx';
import Footer from './component/footer/footer.jsx';
import ScrollToTop from './component/scroll_to_top.jsx';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* {loading ? <Welcome /> : ( */}
        <Router>
          <ScrollToTop/>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path= "/footer" element = {<Footer/>}/>
          </Routes>
        </Router>
      {/* )} */}
    </>
  );
};

export default App;
