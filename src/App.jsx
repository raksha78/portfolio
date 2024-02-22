import Header from './Header';
import Contact from './Contact';
import Project from './Project';
import About from './About';
import Hero from './Hero';

import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [page, setPage] = useState('/');

  useEffect(() => {

    function setStateToUrl() {
      setPage(document.location.pathname);
    }

    setStateToUrl() // initial load

    window.addEventListener('popstate', setStateToUrl);

    return () => {
      window.removeEventListener('popstate', setStateToUrl);
    }

  }, []);


  return (
    <div className='app'>
      <Header setPage={setPage} />
      <main>
        {(page === '/portfolio/' || page === '/' || page === '/portfolio') && <Hero setPage={setPage} />}
        {(page === '/About' || page === '/portfolio/About') && <About />}
        {(page === '/Projects' || page === '/portfolio/Projects') && <Project />}
        {(page === '/Contact' || page === '/portfolio/Contact') && <Contact />}
      </main>
    </div>
  )
}

export default App
