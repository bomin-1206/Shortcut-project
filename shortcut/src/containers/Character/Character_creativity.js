import "./Character_creativity.scss";
import creativity from "../../image/creativity.png";
import Attention from "../Map/Creativity";

const Character_creativity = () => {
  return (
    <div className="character_creativity">
      <div className="title">
        <img src={creativity} className="image_creativity" alt="image_creativity" />
        <p className="main_text">돌발/창의력</p>
      </div>
      <div className="contents">
        <Attention />
      </div>
    </div>
  );
};

export default Character_creativity;
