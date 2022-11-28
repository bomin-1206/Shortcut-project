import notfound from '../image/notfound.png';
import './Notfound.scss';

const Notfound = () => {
    return (
        <div className="notfound">
            <img src={notfound} className="image_notfound" alt='image_notfound' />
            <p className="text">404</p>
            <p className='text'>Not found</p>
        </div>
    )
};

export default Notfound;