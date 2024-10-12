
import Preloader  from './pages/preloader/preloader';
import Start from './pages/start/start.jsx'
import Portfolio from './pages/main/main.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './graphics/styles/style.scss'
import About from './pages/about/About.jsx';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Preloader />} />
        <Route path="/start" element={<Start />} />
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/portfolio/me" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
