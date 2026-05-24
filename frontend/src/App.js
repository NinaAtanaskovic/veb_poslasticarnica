import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="app-wrapper">
      {/* Header */}
     <Header />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <Outlet />
      </main>

      {/* Footer  */}
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;