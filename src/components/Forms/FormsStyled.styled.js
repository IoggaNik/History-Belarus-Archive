import styles from 'styled-components';

export const MainSection = styles.section`
    padding: 20px 0 20px 0;
    margin-top: 20px;
    padding-bottom: 70px;
`;

export const ContainerForms = styles.div`
    margin: 0 auto;
    width: 70vw;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (min-width: 320px) and (max-width: 1000px) {
        flex-direction: column;
        align-items: stretch;
        gap: 50px;
    }
`;

export const BlockForm = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeadindBlock = styles.div`
    color: #fff;
    background-color: #105332ff;
    width: fit-content;
    padding: 15px 40px;
    font-size: 14px;
    border-radius: 35px 35px 0 0;

    @media (min-width: 320px) and (max-width: 475px) {
        h1 {
            font-size: 17px;
        }
    }

    @media (min-width: 1600px) and (max-width: 2586px) {
        padding: 35px 60px;
        font-size: 21px;
    }
`;

export const Found = styles.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    background-color: #0b3b23ff;
    padding: 20px 40px 30px 40px;
    border-radius: 15px;
    box-shadow: 0 12px 20px 2px #000;
    width: 310px;

    @media (min-width: 1600px) and (max-width: 2586px) {
        padding: 50px 110px 50px 110px;
        gap: 30px;
        width: 460px;
    }

    @media (min-width: 320px) and (max-width: 425px) {
        padding: 20px 20px 30px 20px;
        width: 220px;

        input {
            width: 150px;
            font-size: 10px;
        }
    }
`;

export const Add = styles.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 40px 30px 40px;
    background-color: #3b0c23ff;
    border-radius: 15px;
    gap: 20px;
    width: 350px;
    box-shadow: 0 12px 20px 2px #000;

    @media (min-width: 1600px) and (max-width: 2586px) {
        padding: 50px 110px 50px 70px;
        width: 530px;
        gap: 30px;
    }

    @media (min-width: 320px) and (max-width: 400px) {
        padding: 20px 20px 30px 20px;
        width: 260px;
    }
`

export const Input = styles.input`
    padding: 10px 20px 10px 10px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    color: #fff;

    &::placeholder {
        color: #fff;
        transition: .2s ease;
    }
    
    &:focus::placeholder {
        color: transparent;
        transform: translateX(5px);
    }

    @media (min-width: 1600px) and (max-width: 2586px) {
        padding: 10px 20px 10px 0;
        font-size: 25px;
    }

    @media (min-width: 320px) and (max-width: 400px) {
        font-size: 13px;
    }
`;

export const ButtonForm = styles.button`
    padding: 10px 20px;
    font-size: 17px;
    border: none;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: .3s ease;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: #fff;
            color: #000;
        }
    }

    @media (min-width: 1600px) and (max-width: 2586px) {
        font-size: 29px;
        padding: 20px 30px;
    }

    @media (min-width: 320px) and (max-width: 400px) {
        font-size: 14px;
    }
`;

export const BioTextArea = styles.textarea`
    outline: none;
    border: none;
    background: transparent;
    min-height: 125px;
    border-bottom: 1px solid #fff;
    align-self: stretch;
    color: #fff;
    margin-top: 10px;
    resize: none;

    &::placeholder {
        color: #b6b6b6ff;
        transition: .2s ease;
    }

    &:focus::placeholder {
        color: transparent;
    }

    @media (min-width: 1600px) and (max-width: 2586px) {
        // padding: 10px 20px 10px 0;
        font-size: 23px;
        min-height: 200px;
    }
`;

export const FileInput = styles.input`
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    z-index: -1;
`

export const FileLabel = styles.label`
    color: #000;
    background-color: #fff;
    cursor: pointer;
    font-size: 17px;
    padding: 10px 20px;
    border-radius: 10px;
    transition: .3s ease;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: #b8b8b8ff;
        }
    }

    @media (min-width: 1600px) and (max-width: 2586px) {
        font-size: 28px;
    }

    @media (min-width: 320px) and (max-width: 400px) {
        font-size: 14px;
    }
`;