import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'
import { ToastContainer} from 'react-toastify';
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';

function App() {
  const [token] = useToken()

  console.log(token.token, "token");

  return (
    <div>
      <BrowserRouter>
      {token.token && <Navbar/>}
        <Routes>
          <Route path="/" element={!token.token ? <Link to={'/auth'} /> : <Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
