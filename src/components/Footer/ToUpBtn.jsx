import { defState, up_icon } from './Footer_MS.module.css';
import ToUpIcon from '../../images/arrow-pointing-to-up-svgrepo-com.png';
import { handleScroll } from '../functions/handleScroll';

const ToUpBtn = ({ ref, className }) => {
    return (
        <button
            onClick={() => handleScroll('main-head')}
            className={`${className} ${defState}`}
            ref={ref}
        >
            <span>
                <img src={ToUpIcon} className={up_icon} />
            </span>
        </button>
    );
};

export default ToUpBtn;