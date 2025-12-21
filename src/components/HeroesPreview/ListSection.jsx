import heroesData from '../../heroes_data.json';
import PreviewStyled from './Preview.styled';
import styles from './SectionStyle.module.css';

const ListSection = () => {
    const { heroCard, list } = styles;

    return (
        <PreviewStyled.List className={list}>
            {heroesData.map(
                ({ id, photoUrl, fullName, rank }, index) =>
                    index < 6 && (
                        <PreviewStyled.HeroCard key={id} className={heroCard}>
                            <PreviewStyled.PictureHero src={photoUrl} />
                            <h1>{fullName}</h1>
                            <p>{rank}</p>
                        </PreviewStyled.HeroCard>
                    )
            )}
        </PreviewStyled.List>
    );
};

export default ListSection;
