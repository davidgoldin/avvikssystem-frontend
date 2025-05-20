import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
//Header til prosjketet med navn og logg ut funksjon lagt til
export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <h1 className="text-xl font-bold text-blue-700">Avvikssystem</h1>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-sm bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 transition"
      >
        <LogOut size={16} />
        Logg ut
      </button>
    </header>
  );
}
