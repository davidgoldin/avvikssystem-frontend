import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
//import av nødvendige funksjoner fra react til frotnend
export default function Pasienthendelse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pasientId: '',
    hendelseDato: '',
    beskrivelse: '',
    tiltak: '',
  });
//bygging av simple funksjoner som skal brukes i frontend
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
//oppsetting av kommunikajson mellom innsending av data til postman i JSON form
  const sendInn = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/pasienthendelse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Noe gikk galt ved innsending');
      }

      navigate('/takk');
    } catch (error) {
      console.error('Feil ved innsending:', error);
      alert('Kunne ikke sende inn hendelsen. Sjekk om backend kjører.');
    }
  };
//oppsett av frontend visuelle ting
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
