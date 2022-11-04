import "./Character_questions.scss";
import questions from "../../image/questions.png";
import Questions from "../Map/Questions";

const Character_questions = () => {
  return (
    <div className="character_questions">
      <div className="title">
        <img src={questions} className="image_questions" alt="image_questions" />
        <p className="main_text">압박질문</p>
      </div>
      <div className="contents">
        <Questions />
      </div>
    </div>
  );
};

export default Character_questions;
