import { Route, Routes } from 'react-router-dom';

// PAGES
import { Home, Presale } from './pages';

// COMPONENTS
import { Navbar, Footer } from './components';

// STYLESHEET
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presale" element={<Presale />} />
          </Routes>
        </>
      </main>
      <Footer />
    </>
  );
}

export default App;
