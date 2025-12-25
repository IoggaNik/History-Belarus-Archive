import { defState, up_icon } from './Footer_MS.module.css';
import ToUpIcon from '../../images/arrow-pointing-to-up-svgrepo-com.png'

const ToUpBtn = ({ ref, className }) => {
  return (
    <a href="#main-head">
        <button className={`${className} ${defState}`} ref={ref}>
            <span>
                <img src={ToUpIcon} className={up_icon} />
            </span>
        </button>
    </a>
  )
}

export default ToUpBtn