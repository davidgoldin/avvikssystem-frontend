import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { CheckCircle } from 'lucide-react';
//takk meny da fullført bruk av brukeren 
export default function Takk() {
  const navigate = useNavigate();
//returnere til bruker en takkemelding og mulighet til å returnere til hovedmenyy
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-28">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
          <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Takk for innsending!</h1>
          <p className="text-gray-600 mb-6">Skjemaet ditt er mottatt og lagret.</p>
          <button
            onClick={() => navigate('/home')}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
          >
            Tilbake til hovedmeny
          </button>
        </div>
      </div>
    </>
  );
}
