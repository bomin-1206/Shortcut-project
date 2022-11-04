import "./Character_foreign.scss";
import foreign from "../../image/foreign.png";
import Foreign from "../Map/Foreign";

const Character_foreign = () => {
  return (
    <div className="character_foreign">
      <div className="title">
        <img src={foreign} className="image_foreign" alt="image_foreign" />
        <p className="main_text">대외활동 및 성격</p>
      </div>
      <div className="contents">
        <Foreign />
      </div>
    </div>
  );
};

export default Character_foreign;
