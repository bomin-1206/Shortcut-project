import "./Company_CJ.scss";
import cj from "../../image/image_CJ.png";
import CJ from "../Map/CJ.js";

const Company_CJ = () => {
  return (
    <div className="company_CJ">
      <div className="title">
        <img src={cj} className="image_CJ" alt="image_CJ" />
        <p className="main_text">CJ그룹</p>
      </div>
      <div className="contents">
        <CJ />
      </div>
    </div>
  );
};

export default Company_CJ;
