import "./Character_fit.scss";
import fit from "../../image/fit.png";
import Fit from "../Map/Fit";

const Character_fit = () => {
  return (
    <div className="character_fit">
      <div className="title">
        <img src={fit} className="image_fit" alt="image_fit" />
        <p className="main_text">기업/직무 적합도 및 관심도</p>
      </div>
      <div className="contents">
        <Fit />
      </div>
    </div>
  );
};

export default Character_fit;
