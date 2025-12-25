import styles from 'styled-components';
import { Link } from 'react-router-dom';

export const Foot = styles.footer`
    width: 100%;
    min-height: 375px;
    background-color: #222d1eff;
    padding: 20px 0 20px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;

    @media (min-width: 320px) and (max-width: 475px) {
        p {
            font-size: 14px;
        }
    }

    @media (min-width: 1800px) and (max-width: 2732px) {
        p {
            font-size: 29px;
        }
    }  
`;

export const Container = styles.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    width: 85%;

    @media (min-width: 320px) and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        gap: 70px;  
    }

    @media (min-width: 1800px) and (max-width: 2732px) {
        p {
            font-size: 31px;
        }
    }   
`;

export const Information = styles.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;

    @media (min-width: 320px) and (max-width: 475px) {
        h2 {
            font-size: 19px;
        }
    }

    @media (min-width: 320px) and (max-width: 1320px) {
        flex-direction: column;
        align-items: center;

        div ul {
            align-items: center;
        }
    }

    @media (min-width: 1800px) and (max-width: 2732px) {
        * {
            font-size: 29px;
        }
    }    
`;

export const Logo = styles.img`
    position: relative;
    width: 290px;
    height: 150px;
    z-index: 3;
`;

export const Contacts = styles.div`
    @media (min-width: 320px) and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Heading = styles.h1`
    color: #fff;
    margin-bottom: 40px;

    @media (min-width: 320px) and (max-width: 1200px) {
        margin-bottom: 0;
    }
`;

export const ContactsList = styles.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 40px;

    @media (min-width: 320px) and (max-width: 425px) {
        align-items: center;
    }
`;

export const InfoLi = styles.li`
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;

    color: #fff;
    font-size: 21px;

    @media (min-width: 320px) and (max-width: 475px) {
        p {
            text-align: center;
        }
    }
`;

export const InfoLink = styles(Link)`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Icon = styles.img`
    width: 20px;
    height: 20px;
`;