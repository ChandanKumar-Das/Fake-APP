import './App.css';
import { Index } from './pages/Index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Details } from './pages/details.js';


function App() {
  return (
    <>
  
    <Router>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
