import './Footer.scss';
import logo from '../image/logo.png';
import schoollogo from '../image/schoollogo.png';

const Footer = () => {
    
    if(window.location.pathname === '/Login' || window.location.path === '/Register') return null;
    
    return (
        <div className='Footer'>
            <header className='footer_header'>
                <div className="main">
                    <img src={logo} className="logo" alt="logo" />
                    <hr className="hr" />
                </div>
                <div className='imformation'>
                    <div className='developer'>
                        <p className='title'>개발자 이메일</p>
                        <p className='content'>gbm5959@gmail.com</p>
                    </div>
                    <div className='introduce'>
                        <p className='title'>소개</p>
                        <p className='content'>개발자의 모든 것을 담아놓은 사이트</p>
                    </div>
                    <div className='school'>
                        <p className='title'>학교</p>
                        <p className='content'>대구소프트웨어마이스터고등학교</p>
                        <p className='content'>대구광역시 달성군 구지면 창리로 11길</p>
                    </div>
                </div>
                <img src={schoollogo} className="school-logo" alt="logo" />
            </header>
        </div>
    )
}

export default Footer;