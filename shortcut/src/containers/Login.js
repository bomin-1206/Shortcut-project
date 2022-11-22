import {useNavigate} from 'react-router-dom';
import developer from '../image/developer.png';
import logo from '../image/logo.png';
import back_bt from '../image/back_bt.png';
import './Login.scss';

const Login = () => {

    let navigate=useNavigate();
    
    return (
        <div className="Login">
            <header className='header'>
                <div>
                    <img src={developer} className="image_developer" alt="developer" />
                <div className='main'>
                    <img src={back_bt} className="back_bt" alt="back_bt" onClick={()=>{ navigate('/')}}/>
                    <img src={logo} className="logo" alt="logo" />
                    <p className="main_text1">아이디</p>
                    <input type="text" />
                    <p className='main_text2'>비밀번호</p>
                    <input type="password" />
                </div>
                <button className='login_bt'>로그인</button>
                <p className='text'>아직 회원이 아니신가요?&nbsp;&nbsp;&nbsp;<p className='go_register' onClick={()=>{ navigate('/Register') }} >회원가입</p></p>
                </div>
            </header>
        </div>
    )
}

export default Login;