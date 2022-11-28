import './Hacks.scss';
import {useNavigate} from 'react-router-dom';
import plus from '../image/plus.png';

const Hacks = () => {

    let navigate=useNavigate();

    return (
        <div className='Hacks'>
            <div className='search_box'>
                <input type="serarch" className="search" placeholder="검색어를 입력해 주세요" />
            </div>
            <div className='hacks_content'>
                
            </div>
            <div className='plus_button'>
                <button className='plus_bt' onClick={() => { navigate('/Makehacks')}}><img src={plus} className="plus" alt="plus" /></button>
            </div>
        </div>
    )
}

export default Hacks;