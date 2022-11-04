import "./Character_adaptation.scss";
import adaptation from "../../image/adaptation.png";
import Adapation from "../Map/Adapation";

const Character_goal = () => {
  return (
    <div className="character_adaptation">
      <div className="title">
        <img src={adaptation} className="image_adaptation" alt="image_adaptation" />
        <p className="main_text">조직적응력</p>
      </div>
      <div className="contents">
        <Adapation />
      </div>
    </div>
  );
};

export default Character_goal;
