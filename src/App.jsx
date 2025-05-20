import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import av sider og routing, med en 404 fallback dersom det mislykkes
import Login from './pages/Login';
import Home from './pages/Home';
import Skademelding from './pages/Skademelding';
import Pasienthendelse from './pages/Pasienthendelse';
import Forbedringsforslag from './pages/Forbedringsforslag';
import Takk from './pages/takk';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skademelding" element={<Skademelding />} />
        <Route path="/pasienthendelse" element={<Pasienthendelse />} />
        <Route path="/forbedringsforslag" element={<Forbedringsforslag />} />
        <Route path="/takk" element={<Takk />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-center p-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-700 mb-4">404 – Siden finnes ikke</h1>
                <a href="/" className="text-blue-600 underline">Tilbake til forsiden</a>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
