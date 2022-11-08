import "./Company_sinhan.scss";
import sinhan from "../../image/image_sinhan.png";
import Sinhan from "../Map/Sinhan.js";

const Company_sinhan = () => {
  return (
    <div className="company_sinhan">
      <div className="title">
        <img src={sinhan} className="image_sinhan" alt="image_sinhan" />
        <p className="main_text">신한은행</p>
      </div>
      <div className="contents">
        <Sinhan />
      </div>
    </div>
  );
};

export default Company_sinhan;
