import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
