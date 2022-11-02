import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import Hacks from './containers/Hacks';
import Algorithm from './containers/Algorithm';
import Interview from './containers/Interview';
import Mypage from './containers/Mypage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Hacks" element={<Hacks />} />
          <Route path="/Algorithm" element={<Algorithm />} />
          <Route path="/Interview" element={<Interview />} />
          <Route path='/Mypage' element={<Mypage />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
