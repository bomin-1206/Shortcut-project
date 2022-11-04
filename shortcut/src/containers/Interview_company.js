import './Interview_company.scss';
import {useNavigate} from 'react-router-dom';
import image_nexon from '../image/image_nexon.png';
import image_LG from '../image/image_LG.png';
import image_CJ from '../image/image_CJ.png';
import image_samsung from '../image/image_samsung.png';
import image_sinhan from '../image/image_sinhan.png';
import image_volt from '../image/image_volt.png';
import image_kakao from '../image/image_kakao.png';
import image_hyundai from '../image/image_hyundai.png';
import image_things from '../image/image_things.png';

const Interview_company = () => {

    let navigate=useNavigate();
    
    return (
        <div className='Interview_compnay'>
            <div className='nexon' onClick={()=>{ navigate('/Company_nexon') }}>
                <p className='company_text'>넥슨</p>
                <img src={image_nexon} className="image_nexon" alt="image_nexon" />
            </div>
            <div className='LG' onClick={()=>{ navigate('/Company_LG') }}>
                <p className='company_text'>LG전자</p>
                <img src={image_LG} className="image_LG" alt="image_LG" />
            </div>
            <div className='CJ' onClick={()=>{ navigate('/Company_CJ') }}>
                <p className='company_text'>CJ그룹</p>
                <img src={image_CJ} className="image_CJ" alt="image_CJ" />
            </div>
            <div className='samsung' onClick={()=>{ navigate('/Company_samsung') }}>
                <p className='company_text'>삼성</p>
                <img src={image_samsung} className="image_samsung" alt="image_samsung" />
            </div>
            <div className='sinhan' onClick={()=>{ navigate('/Company_sinhan') }}>
                <p className='company_text'>신한은행</p>
                <img src={image_sinhan} className="image_sinhan" alt="image_sinhan" />
            </div>
            <div className='volt' onClick={()=>{ navigate('/Company_volt') }}>
                <p className='company_text'>한국전력</p>
                <img src={image_volt} className="image_volt" alt="image_volt" />
            </div>
            <div className='kakao' onClick={()=>{ navigate('/Company_kakao') }}>
                <p className='company_text'>카카오</p>
                <img src={image_kakao} className="image_kakao" alt="image_kakao" />
            </div>
            <div className='hyundai' onClick={()=>{ navigate('/Company_hyundai') }}>
                <p className='company_text'>현대</p>
                <img src={image_hyundai} className="image_hyundai" alt="image_hyundai" />
            </div>
            <div className='things' onClick={()=>{ navigate('/Company_things') }}>
                <p className='company_text'>기타</p>
                <img src={image_things} className="image_things" alt="image_things" />
            </div>
        </div>
    )
}

export default Interview_company;