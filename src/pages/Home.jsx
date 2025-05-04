import { useNavigate } from 'react-router-dom';
import { ClipboardList, UserCheck, Lightbulb } from 'lucide-react';
import Header from '../components/Header'; // 👈 viktig

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-24">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Velg skjema</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => navigate('/skademelding')}
              className="bg-blue-100 text-blue-800 hover:bg-blue-200 p-6 rounded-xl shadow flex flex-col items-center transition"
            >
              <ClipboardList size={32} className="mb-2" />
              <span className="font-medium">Skademelding</span>
              <span className="text-sm text-gray-600">Personale</span>
            </button>

            <button
              onClick={() => navigate('/pasienthendelse')}
              className="bg-teal-100 text-teal-800 hover:bg-teal-200 p-6 rounded-xl shadow flex flex-col items-center transition"
            >
              <UserCheck size={32} className="mb-2" />
              <span className="font-medium">Pasienthendelse</span>
            </button>

            <button
              onClick={() => navigate('/forbedringsforslag')}
              className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 p-6 rounded-xl shadow flex flex-col items-center transition"
            >
              <Lightbulb size={32} className="mb-2" />
              <span className="font-medium">Forbedringsforslag</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
