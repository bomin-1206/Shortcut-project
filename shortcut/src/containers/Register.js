import {useNavigate} from 'react-router-dom';
import developer from '../image/developer.png';
import logo from '../image/logo.png';
import back_bt from '../image/back_bt.png';
import './Register.scss';

const Register = () => {

    let navigate=useNavigate();

    return (
        <div className='Register'>
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
                    <p className='main_text3'>비밀번호 확인</p>
                    <input type="password" />
                    <p className='main_text1'>이메일</p>
                    <input type="email" />
                </div>
                <button className='register_bt'>회원가입</button>
                <p className='text'>이미 회원이신가요?&nbsp;&nbsp;&nbsp;<p className='go_login' onClick={()=>{ navigate('/Login') }} >로그인</p></p>
                </div>
            </header>
        </div>
    )
}

export default Register;