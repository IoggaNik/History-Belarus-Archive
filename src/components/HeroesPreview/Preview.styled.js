import styled from 'styled-components';

export default {
    ListHeroes: styled.div`
        width: 100%;
        margin: 0 auto;
        margin-top: 5vh;
    `,
    Section: styled.section`
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #5f5f5fff;
        width: 95%; 
        max-width: 2500px;
        margin: 0 auto;
        padding-bottom: 40px;
    `,
    PictureHero: styled.img`
        width: 100%; 
        height: auto;
        aspect-ratio: 3 / 4; 
        object-fit: cover;
        border-radius: 4px;
        max-width: 440px;
    `,
    List: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 600px)); 
        justify-content: center; 
        gap: 60px 40px;
        width: 100%;
    `,
    HeroCard: styled.article`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
        background-color: #fff;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.2), 
                    0 10px 15px -6px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease;
        width: 100%;
        max-width: 600px;
        box-sizing: border-box;

        h1 {
            font-size: clamp(1.2rem, 2vw, 2.5rem); 
            margin: 0;
            min-height: 2.5em;
            display: flex;
            align-items: center;
        }

        p {
            font-size: clamp(1rem, 1.5vw, 2rem);
            color: #555;
            margin: 0;
        }

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                transform: translateY(-10px);
            }
        }
    `,
    Description: styled.p`
        color: #5f5f5fff;
        text-align: justify;
        padding: 2vw;
        font-size: clamp(1rem, 1.1vw, 1.5rem);
        line-height: 1.7;
    `
};