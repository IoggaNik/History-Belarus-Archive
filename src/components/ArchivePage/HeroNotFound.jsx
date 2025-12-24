import {
    notFoundWrapper,
    icon,
    text,
    suggestion,
} from './ArchiveStyle.module.css';

const HeroNotFound = () => {
    return (
        <div className={notFoundWrapper}>
            <div className={icon}>🔍</div>
            <h2 className={text}>Герой не найден в списках архива</h2>
            <p className={suggestion}>
                Проверьте правильность написания ввода или введите только фамилию.
            </p>
        </div>
    );
};

export default HeroNotFound;