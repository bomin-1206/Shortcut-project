import "./Company_volt.scss";
import volt from "../../image/image_volt.png";
import Volt from "../Map/Volt.js";

const Company_volt = () => {
  return (
    <div className="company_volt">
      <div className="title">
        <img src={volt} className="image_volt" alt="image_volt" />
        <p className="main_text">한국전력</p>
      </div>
      <div className="contents">
        <Volt />
      </div>
    </div>
  );
};

export default Company_volt;
