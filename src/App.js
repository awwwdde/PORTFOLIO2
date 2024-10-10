
import Preloader  from './pages/preloader/preloader';
import Start from './pages/start/start.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './graphics/styles/style.scss'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Preloader />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
