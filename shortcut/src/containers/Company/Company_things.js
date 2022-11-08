import "./Company_things.scss";
import things from "../../image/image_things.png";
import Things from "../Map/Things.js";

const Company_things = () => {
  return (
    <div className="company_things">
      <div className="title">
        <img src={things} className="image_things" alt="image_things" />
        <p className="main_text">현대</p>
      </div>
      <div className="contents">
        <Things />
      </div>
    </div>
  );
};

export default Company_things;

