import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Skademelding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    arbeidssted: '',
    dato: '',
    alvorlighetsgrad: '',
    beskrivelse: '',
    strakstiltak: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const neste = () => setStep((s) => s + 1);
  const tilbake = () => setStep((s) => s - 1);

  const sendInn = () => {
    console.log('Sender inn data:', formData);
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

          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Skademelding – steg {step} av 4
          </h1>

          <div className="mb-6 h-2 w-full bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          {step === 1 && (
            <>
              <label className="block mb-1 text-gray-700 font-medium">Arbeidssted</label>
              <input
                type="text"
                name="arbeidssted"
                value={formData.arbeidssted}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
              />

              <label className="block mb-1 text-gray-700 font-medium">Dato for hendelsen</label>
              <input
                type="date"
                name="dato"
                value={formData.dato}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
              />
            </>
          )}

          {step === 2 && (
            <>
              <label className="block mb-1 text-gray-700 font-medium">Hva skjedde?</label>
              <textarea
                name="beskrivelse"
                value={formData.beskrivelse}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
              />

              <label className="block mb-1 text-gray-700 font-medium">Alvorlighetsgrad</label>
              <select
                name="alvorlighetsgrad"
                value={formData.alvorlighetsgrad}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
              >
                <option value="">Velg</option>
                <option value="Høy">Høy</option>
                <option value="Medium">Medium</option>
                <option value="Lav">Lav</option>
              </select>
            </>
          )}

          {step === 3 && (
            <>
              <label className="block mb-1 text-gray-700 font-medium">Strakstiltak</label>
              <input
                type="text"
                name="strakstiltak"
                value={formData.strakstiltak}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
              />
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Forhåndsvisning</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Arbeidssted:</strong> {formData.arbeidssted}</li>
                <li><strong>Dato:</strong> {formData.dato}</li>
                <li><strong>Hva skjedde:</strong> {formData.beskrivelse}</li>
                <li><strong>Alvorlighetsgrad:</strong> {formData.alvorlighetsgrad}</li>
                <li><strong>Strakstiltak:</strong> {formData.strakstiltak}</li>
              </ul>
            </>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={tilbake}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-300"
              >
                Tilbake
              </button>
            )}
            {step < 4 && (
              <button
                onClick={neste}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 ml-auto"
              >
                Neste
              </button>
            )}
            {step === 4 && (
              <button
                onClick={sendInn}
                className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 ml-auto"
              >
                Send inn
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
