import "./Company_kakao.scss";
import kakao from "../../image/image_kakao.png";
import Kakao from "../Map/Kakao.js";

const Company_Kakao = () => {
  return (
    <div className="company_Kakao">
      <div className="title">
        <img src={kakao} className="image_kakao" alt="image_kakao" />
        <p className="main_text">카카오</p>
      </div>
      <div className="contents">
        <Kakao />
      </div>
    </div>
  );
};

export default Company_Kakao;
