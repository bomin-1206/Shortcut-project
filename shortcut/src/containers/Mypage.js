import './Mypage.scss';
import image_secession from '../image/image_secession.png';

const Mypage = () => {
    return (
        <div className='Mypage'>
            <div className='my_profile'>
                <p className='mypage_text'>내 프로필</p>
                
            </div>
            <div className='secession'>
                <img src={image_secession} className="image_secession" alt="image_secession" />
                <div className='secession_right'>
                    <p className='mypage_text'>회원 탈퇴하기</p>
                    <p className="sub_text">정말 탈퇴하시겠습니까?</p>
                    <button className='secession_bt'>회원 탈퇴</button>
                </div>
            </div>
        </div>
    )
}

export default Mypage;