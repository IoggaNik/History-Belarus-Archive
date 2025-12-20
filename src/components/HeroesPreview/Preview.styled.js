import styled from 'styled-components';

export default {
    ListHeroes: styled.div`
        width: 100%;
        margin: 0 auto;
        margin-top: 100px;
    `,
    Section: styled.section`
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #5f5f5fff;
        width: 95%;
        margin: 0 auto;
        padding-bottom: 20px;
    `,
    PictureHero: styled.img`
        width: 340px;
        height: 450px;
    `,
    List: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(200px, 1fr));
        gap: 50px;
    `,
    HeroCard: styled.article`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    `,
    Description: styled.p`
        color: #5f5f5fff;
        text-align: justify;
        padding: 20px;
    `
};