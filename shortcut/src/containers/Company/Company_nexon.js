import "./Company_nexon.scss";
import nexon from "../../image/image_nexon.png";
import Nexon from "../Map/Nexon.js";

const Company_nexon = () => {
  return (
    <div className="company_nexon">
      <div className="title">
        <img src={nexon} className="image_nexon" alt="image_nexon" />
        <p className="main_text">넥슨</p>
      </div>
      <div className="contents">
        <Nexon />
      </div>
    </div>
  );
};

export default Company_nexon;
