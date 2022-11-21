import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Navbar.scss';
import logo from '../image/logo.png';
import user from '../image/user.png';

const Navbar = () => {

    const [isLogin] = useState('');

    let navigate=useNavigate();
    
    return (
        <div className='Navbar'>
            <header className="navbar_header">
                <div className='main'>
                    <img src={logo} className="logo" alt="logo" onClick={()=>{ navigate('/') }}/>
                    <div className='menu'>
                        <p className="go_home" onClick={()=>{ navigate('/') }}>홈</p>
                        <p className='go_hacks' onClick={()=>{ navigate('/Hacks') }}>꿀팁</p>
                        <p className='go_algorithm' onClick={()=>{ navigate('/Algorithm') }}>알고리즘</p>
                        <p className='go_interview' onClick={()=>{ navigate('/Interview') }}>면접</p>
                    </div>
                    <div className='imformation_user'>
                        <p className='check_login'>{isLogin?'로그아웃':'로그인'}</p>
                        <img src={user} className="user" alt="user" onClick={()=> {navigate('./Mypage') }}/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;