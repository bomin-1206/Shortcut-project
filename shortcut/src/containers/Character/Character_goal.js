import "./Character_goal.scss";
import goal from "../../image/goal.png";
import Goal from "../Map/Goal";

const Character_goal = () => {
  return (
    <div className="character_goal">
      <div className="title">
        <img src={goal} className="image_goal" alt="iamge_goal" />
        <p className="main_text">비전/목표</p>
      </div>
      <div className="contents">
        <Goal />
      </div>
    </div>
  );
};

export default Character_goal;
