import "./Company_LG.scss";
import lg from "../../image/image_LG.png";
import LG from "../Map/LG.js";

const Company_LG = () => {
  return (
    <div className="company_LG">
      <div className="title">
        <img src={lg} className="image_LG" alt="image_LG" />
        <p className="main_text">LG전자</p>
      </div>
      <div className="contents">
        <LG />
      </div>
    </div>
  );
};

export default Company_LG;
