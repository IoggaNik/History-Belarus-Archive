import heroesData from '../../heroes_data.json';
import PreviewStyled from './Preview.styled';
import styles from './SectionStyle.module.css';

const ListSection = () => {
    const { heroCard, list } = styles;

    return (
        <PreviewStyled.List className={list}>
            {heroesData
                .slice(0, 6)
                .map(({ id, photoUrl, fullName, rank, wikiPage }) => (
                    <PreviewStyled.HeroCard key={id} className={heroCard}>
                        <PreviewStyled.PictureHero src={photoUrl} />
                        <h1>{fullName}</h1>
                        <p>{rank}</p>
                        <a target='_blank' className={styles.more_details_link} href={wikiPage}>Подробнее</a>
                    </PreviewStyled.HeroCard>
                ))}
        </PreviewStyled.List>
    );
};

export default ListSection;