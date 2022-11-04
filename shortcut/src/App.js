import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Hacks from "./containers/Hacks";
import Algorithm from "./containers/Algorithm";
import Interview from "./containers/Interview";
import Mypage from "./containers/Mypage";
import Interview_character from "./containers/Interview_character";
import Interview_company from './containers/Interview_company';
import Notfound from "./containers/Notfound";
import Character_goal from "./containers/Character/Character_goal";
import Character_adapation from "./containers/Character/Character_adaptation";
import Character_attention from './containers/Character/Character_attention';
import Character_creativity from './containers/Character/Character_creativity';
import Character_questions from "./containers/Character/Character_questions";
import Character_fit from "./containers/Character/Character_fit";
import Character_foreign from "./containers/Character/Character_foreign";
import Company_nexon from "./containers/Company/Company_nexon";
import Company_LG from './containers/Company/Company_LG';
import Company_CJ from './containers/Company/Company_CJ';
import Company_samsung from './containers/Company/Company_samsung';
import Company_sinhan from './containers/Company/Company_sinhan';
import Company_volt from './containers/Company/Company_volt';
import Company_kakao from './containers/Company/Company_kakao';
import Comapany_hyundai from './containers/Company/Company_hyundai';
import Company_things from './containers/Company/Company_things';

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
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Interview_character" element={<Interview_character />} />
          <Route path="/Interview_company" element={<Interview_company />} />
          <Route path="Character_goal" element={<Character_goal />} />
          <Route path="Character_adapation" element={<Character_adapation />} />
          <Route path="Character_attention" element={<Character_attention />} />
          <Route path="Character_creativity" element={<Character_creativity />} />
          <Route path="Character_questions" element={<Character_questions />} />
          <Route path="Character_fit" element={<Character_fit />} />
          <Route path="Character_foreign" element={<Character_foreign />} />
          <Route path="Company_nexon" element={<Company_nexon />} />
          <Route path="Company_LG" element={<Company_LG />} />
          <Route path="Company_CJ" element={<Company_CJ />} />
          <Route path="Company_samsung" element={<Company_samsung />} />
          <Route path="Company_sinhan" element={<Company_sinhan />} />
          <Route path="Company_volt" element={<Company_volt />} />
          <Route path="Company_kakao" element={<Company_kakao />} />
          <Route path="Company_hyundai" element={<Comapany_hyundai />} />
          <Route path="Company_things" element={<Company_things />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
