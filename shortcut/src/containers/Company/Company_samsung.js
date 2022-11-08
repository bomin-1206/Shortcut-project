import "./Company_samsung.scss";
import samsung from "../../image/image_samsung.png";
import Samsung from "../Map/Samsung.js";

const Company_samsung = () => {
  return (
    <div className="company_samsung">
      <div className="title">
        <img src={samsung} className="image_samsung" alt="image_samsung" />
        <p className="main_text">삼성</p>
      </div>
      <div className="contents">
        <Samsung />
      </div>
    </div>
  );
};

export default Company_samsung;
