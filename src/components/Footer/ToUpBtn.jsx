import { defState, up_icon } from './Footer_MS.module.css';
import ToUpIcon from '../../images/arrow-pointing-to-up-svgrepo-com.png';

const ToUpBtn = ({ ref, className }) => {
    const handleScroll = () => {
        const element = document.getElementById('main-head');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleScroll} className={`${className} ${defState}`} ref={ref}>
            <span>
                <img src={ToUpIcon} className={up_icon} />
            </span>
        </button>
    );
};

export default ToUpBtn;