import './Home.scss';
import {useNavigate} from 'react-router-dom';
import home_logo from '../image/home_logo.png';
import home_developer from '../image/home_developer.png';
import first_image from '../image/first_image.png';
import second_image from '../image/second_image.png';
import third_image from '../image/third_image.png';

const Home = () => {

    let navigate=useNavigate();

    return (
        <div className='Home'>
            <header>
                <div className='home_main'>
                    <div className='home_left'>
                        <p className='content'>개발자의 길에 한 발짝 다가가보세요</p>
                        <img src={home_logo} className="home_logo" alt="home_logo" />
                        <button className='start_bt' onClick={()=> {navigate('./Hacks')}}>시작하기</button>
                    </div>
                    <img src={home_developer} className="home_developer" alt="home_developer" />
                </div>
                <div className='first_content'>
                    <img src={first_image} className="first_image" alt="fist_image" />
                </div>
                <div className='second_content'>
                    <img src={second_image} className="second_image" alt="second_image" />
                </div>
                <div className='third_content'>
                    <img src={third_image} className="third_image" alt="third_image" />
                </div>
            </header>
        </div>
    )
}

export default Home;