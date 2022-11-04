import './Interview_character.scss';
import {useNavigate} from 'react-router-dom';
import image_goal from '../image/goal.png';
import image_adaptation from '../image/adaptation.png';
import image_attention from '../image/attention.png';
import image_creativity from '../image/creativity.png';
import image_questions from '../image/questions.png';
import image_fit from '../image/fit.png';
import image_foreign from '../image/foreign.png';

const Interview_character = () => {

    let navigate=useNavigate();

    return (
        <div className='Interview_character'>
            <div className='goal' onClick={()=>{ navigate('/Character_goal') }}> {/*비전/목표*/}
                <p className='character_text'>비전/목표</p>
                <img src={image_goal} className="image_goal" alt="image_goal" />
            </div>
            <div className='adaptation' onClick={()=>{ navigate('/Character_adapation') }}> {/*조직적응력*/}
                <p className='character_text'>조직적응력</p>
                <img src={image_adaptation} className="image_adaptation" alt="image_adaptation" />
            </div>
            <div className='attention' onClick={()=>{ navigate('/Character_attention') }}> {/*관심사/가치관*/}
                <p className='character_text'>관심사/가치관</p>
                <img src={image_attention} className="image_attention" alt="image_attention" />
            </div>
            <div className='creativity' onClick={()=>{ navigate('/Character_creativity') }}> {/*돌발/창의력*/}
                <p className='character_text'>돌발/창의력</p>
                <img src={image_creativity} className="image_creativity" alt="image_creativity" />
            </div>
            <div className='questions' onClick={()=>{ navigate('/Character_questions') }}> {/*압박질문*/}
                <p className='character_text'>압박질문</p>
                <img src={image_questions} className="image_questions" alt="image_questions" />
            </div>
            <div className='fit' onClick={()=>{ navigate('/Character_fit') }}> {/*기업/직무 적합도 및 관심도*/}
                <p className='character_text'>기업/직무 적합도 및 관심도</p>
                <img src={image_fit} className="image_fit" alt="image_fit" />
            </div>
            <div className='foreign' onClick={()=>{ navigate('/Character_foreign') }}> {/*대외활동 및 성격*/}
                <p className='character_text'>대외활동 및 성격</p>
                <img src={image_foreign} className="image_foreign" alt="image_foreign" />
            </div>
        </div>
    )
}

export default Interview_character;