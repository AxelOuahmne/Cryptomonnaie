import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './templates/Header/NavBar';
import Accueil from './components/Accueil';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<Accueil />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
