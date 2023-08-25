import { Route, Routes } from 'react-router-dom';

// PAGES
import { Home, Presale } from './pages';

// STYLESHEET
import './App.css';

function App() {
  return (
    <>
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
