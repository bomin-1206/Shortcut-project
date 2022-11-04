import './Interview.scss';
import {useNavigate} from 'react-router-dom';
import image_character from '../image/image_character.png';
import image_company from '../image/image_company.png';

const Interview = () => {

    let navigate=useNavigate();

    return (
        <div className='Interview'>
             <div className='character' onClick={()=>{ navigate('/Interview_character') }}>
                <p className='interview_text'>성격별</p>
                <img src={image_character} className="image_character" alt="image_character" />
             </div>
             <div className='company' onClick={()=>{ navigate('/Interview_company') }}>
                <p className='interview_text'>기업별 / 직무별</p>
                <img src={image_company} className="image_company" alt="image_company" />
             </div>
        </div>
    )
}

export default Interview;