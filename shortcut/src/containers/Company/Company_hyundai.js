import "./Company_hyundai.scss";
import hyundai from "../../image/image_hyundai.png";
import Hyundai from "../Map/Hyundai.js";

const Company_hyundai = () => {
  return (
    <div className="company_hyundai">
      <div className="title">
        <img src={hyundai} className="image_hyundai" alt="image_hyundai" />
        <p className="main_text">현대</p>
      </div>
      <div className="contents">
        <Hyundai />
      </div>
    </div>
  );
};

export default Company_hyundai;
