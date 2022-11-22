import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Footer from "./components/Footer";
import Login from './containers/Login';
import Register from './containers/Register';
import Home from "./containers/Home";
import Hacks from "./containers/Hacks";
import Algorithm from "./containers/Algorithm";
import Interview from "./containers/Interview";
import Mypage from "./containers/Mypage";
import InterviewCharacter from "./containers/Interview_character";
import InterviewCompany from './containers/Interview_company';
import Notfound from "./containers/Notfound";
import CharacterGoal from "./containers/Character/Character_goal";
import CharacterAdapation from "./containers/Character/Character_adaptation";
import CharacterAttention from './containers/Character/Character_attention';
import CharacterCreativity from './containers/Character/Character_creativity';
import CharacterQuestions from "./containers/Character/Character_questions";
import CharacterFit from "./containers/Character/Character_fit";
import CharacterForeign from "./containers/Character/Character_foreign";
import CompanyNexon from "./containers/Company/Company_nexon";
import CompanyLG from './containers/Company/Company_LG';
import CompanyCJ from './containers/Company/Company_CJ';
import CompanySamsung from './containers/Company/Company_samsung';
import CompanySinhan from './containers/Company/Company_sinhan';
import CompanyVolt from './containers/Company/Company_volt';
import CompanyKakao from './containers/Company/Company_kakao';
import ComapanyHyundai from './containers/Company/Company_hyundai';
import CompanyThings from './containers/Company/Company_things';
import Makehacks from "./containers/Makehacks";
import ScrollTop from "./containers/ScrollTop";
import Makealgorithm from "./containers/Makealgorithm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollTop />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/Hacks" element={<Hacks />} />
          <Route path="/Algorithm" element={<Algorithm />} />
          <Route path="/Interview" element={<Interview />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Interview_character" element={<InterviewCharacter />} />
          <Route path="/Interview_company" element={<InterviewCompany />} />
          <Route path="Character_goal" element={<CharacterGoal />} />
          <Route path="Character_adapation" element={<CharacterAdapation />} />
          <Route path="Character_attention" element={<CharacterAttention />} />
          <Route path="Character_creativity" element={<CharacterCreativity />} />
          <Route path="Character_questions" element={<CharacterQuestions />} />
          <Route path="Character_fit" element={<CharacterFit />} />
          <Route path="Character_foreign" element={<CharacterForeign />} />
          <Route path="Company_nexon" element={<CompanyNexon />} />
          <Route path="Company_LG" element={<CompanyLG />} />
          <Route path="Company_CJ" element={<CompanyCJ />} />
          <Route path="Company_samsung" element={<CompanySamsung />} />
          <Route path="Company_sinhan" element={<CompanySinhan />} />
          <Route path="Company_volt" element={<CompanyVolt />} />
          <Route path="Company_kakao" element={<CompanyKakao />} />
          <Route path="Company_hyundai" element={<ComapanyHyundai />} />
          <Route path="Company_things" element={<CompanyThings />} />
          <Route path="Makehacks" element={<Makehacks />} />
          <Route path="Makealgorithm" element={<Makealgorithm />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
