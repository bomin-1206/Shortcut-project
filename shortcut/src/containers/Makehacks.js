import React, { useState } from 'react';
import './Makehacks.scss';

const Makehacks = () => {

    const [Designbt, setDesingbt] = useState(0);
    const [Webbt, setWebbt] = useState(0);
    const [Serverbt, setServerbt] = useState(0);
    const [Androidbt, setAndroidbt] = useState(0);
    const [Iosbt, setIosbt] = useState(0);
    const [Gamebt, setGamebt] = useState(0);

    return (
        <div className="Makehacks">
            <div className='main'>
                <input className="title" placeholder="글의 제목을 입력해주세요."/>
                <hr className='hr'/>
                <div className='cartegori'>
                    <button className='design_bt' onClick = {() => setDesingbt(1)}>Design</button>
                    <button className='web_bt' onClick = {() => setWebbt(1)}>Web(front-end)</button>
                    <button className='server_bt' onClick = {() => setServerbt(1)}>Server</button>
                    <button className='android_bt' onClick = {() => setAndroidbt(1)}>Android</button>
                    <button className='ios_bt' onClick = {() => setIosbt(1)}>IOS</button>
                    <button className='game_bt' onClick = {() => setGamebt(1)}>Game</button>
                </div>
                <div className='add_bt'>
                    {
                        Designbt === 1 ? <button className='design_bt'>Design</button> : null
                    }
                    {
                        Webbt === 1 ? <button className='web_bt'>Web(front-end)</button> : null
                    }
                    {
                        Serverbt === 1 ? <button className='server_bt'>Server</button> : null
                    }
                    {
                        Androidbt === 1 ? <button className='android_bt'>Android</button> : null
                    }
                    {
                        Iosbt === 1 ? <button className='ios_bt'>IOS</button> : null
                    }
                    {
                        Gamebt === 1 ? <button className='game_bt'>Game</button> : null
                    }
                </div>
                <textarea className="contents" placeholder="글의 내용을 입력해주세요."/>
                <button className='add'>등록</button>
            </div>
        </div>
    )
}

export default Makehacks;