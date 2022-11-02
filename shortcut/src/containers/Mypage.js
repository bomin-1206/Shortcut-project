import './Mypage.scss';
import image_secession from '../image/image_secession.png';

const Mypage = () => {
    return (
        <div className='Mypage'>
            <button className='my_profile'>
                <p className='mypage_text'>내 프로필</p>
                
            </button>
            <button className='secession'>
                <p className='mypage_text'>회원 탈퇴하기</p>
                <img src={image_secession} className="image_secession" alt="image_secession" />
            </button>
        </div>
    )
}

export default Mypage;