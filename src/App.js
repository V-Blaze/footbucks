import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// PAGES
import { Home, Presale } from './pages';

// COMPONENTS
import { Navbar, Footer } from './components';

// STYLESHEET
import './App.css';

function App() {
  return (
    <>
      <Toaster />
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
