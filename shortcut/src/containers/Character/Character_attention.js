import "./Character_attention.scss";
import attention from "../../image/attention.png";
import Attention from "../Map/Attention";

const Character_goal = () => {
  return (
    <div className="character_attention">
      <div className="title">
        <img src={attention} className="image_attention" alt="image_attention" />
        <p className="main_text">관심사/가치관</p>
      </div>
      <div className="contents">
        <Attention />
      </div>
    </div>
  );
};

export default Character_goal;
