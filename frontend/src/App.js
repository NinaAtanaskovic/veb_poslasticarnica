import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="app-wrapper">
      {/* Header dolazi u Fazi 2 */}
      <header style={{ background: '#2d1b4e', color: 'white', padding: '1rem 2rem' }}>
        <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>🍰 Poslastičarnica</span>
      </header>

      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <Outlet />
      </main>

      {/* Footer dolazi u Fazi 2 */}
      <footer style={{ background: '#f5f5f5', textAlign: 'center', padding: '1rem', fontSize: '0.9rem', color: '#666' }}>
        © {new Date().getFullYear()} Poslastičarnica. Sva prava zadržana.
      </footer>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;