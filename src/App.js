import { Route, Routes } from 'react-router-dom';

// PAGES
import { Home, Presale } from './pages';

// COMPONENTS
import { Navbar } from './components';

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
    </>
  );
}

export default App;
