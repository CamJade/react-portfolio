//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    switch (currentPage) {

      case 'Projects':
        return <Projects currentPage={currentPage}/>;

      default:
      case 'About Me':
        return <AboutMe currentPage={currentPage}/>;
    }
  };

  return (
    <div className="App">
      <h1 className="">          </h1>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
