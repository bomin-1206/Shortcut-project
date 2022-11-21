import React from 'react';
import './Makealgorithm.scss';

const Makealgorithm = () => {

    return (
        <div className="Makealgorithm">
            <div className='main'>
                <input className="title" placeholder="글의 제목을 입력해주세요."/>
                <hr className='hr'/>
                <textarea className="contents" placeholder="글의 내용을 입력해주세요."/>
                <button className='add'>등록</button>
            </div>
        </div>
    )
}

export default Makealgorithm;