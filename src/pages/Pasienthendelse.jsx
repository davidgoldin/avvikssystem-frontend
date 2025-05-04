import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Pasienthendelse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pasientId: '',
    hendelseDato: '',
    beskrivelse: '',
    tiltak: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendInn = () => {
    console.log('Sender inn pasienthendelse:', formData);
    navigate('/takk');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-28">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
          <div className="mb-6">
            <button
              onClick={() => navigate('/home')}
              className="text-blue-600 text-sm hover:underline"
            >
              ← Tilbake til hovedmeny
            </button>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Registrer pasienthendelse
          </h1>

          <label className="block mb-1 text-gray-700 font-medium">
            Pasient ID / Initialer
          </label>
          <input
            type="text"
            name="pasientId"
            value={formData.pasientId}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
          />

          <label className="block mb-1 text-gray-700 font-medium">
            Dato for hendelsen
          </label>
          <input
            type="date"
            name="hendelseDato"
            value={formData.hendelseDato}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
          />

          <label className="block mb-1 text-gray-700 font-medium">
            Beskrivelse av hendelsen
          </label>
          <textarea
            name="beskrivelse"
            value={formData.beskrivelse}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
          />

          <label className="block mb-1 text-gray-700 font-medium">
            Eventuelle tiltak
          </label>
          <input
            type="text"
            name="tiltak"
            value={formData.tiltak}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
          />

          <div className="flex justify-end mt-6">
            <button
              onClick={sendInn}
              className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
            >
              Send inn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
