import {
    Container,
    Foot,
    Heading,
    Information,
    InfoLink,
    Logo,
    ContactsList,
    Contacts,
    InfoLi,
} from './FooterStyle.styled.js';

import ContactsListComp from './ContactsListComp.jsx';
import logo from '../../images/logo-school-wout-bg.png';
import { divLogo, bgLogo } from './Footer_MS.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Foot>
            <Container>
                <Information>
                    <div className={divLogo} >
                        <div className={bgLogo}></div>
                        <Logo src={logo} />
                    </div>
                    <div>
                        <h2 style={{ color: '#fff', textAlign: 'center' }}>
                            «Информационный портал о героях»
                        </h2>
                        <ContactsList id='contacts'>
                            <InfoLi>
                                <InfoLink to="/">Информация о сайте</InfoLink>
                            </InfoLi>
                            <InfoLi>
                                <InfoLink to="/">Контактные данные</InfoLink>
                            </InfoLi>
                            <InfoLi>
                                <p>Автор: Горелик Никита.</p>
                            </InfoLi>
                        </ContactsList>
                    </div>
                </Information>
                <Contacts>
                    <Heading>Контакты</Heading>
                    <ContactsListComp />
                </Contacts>
            </Container>
            <p style={{ color: '#fff', textAlign: 'center' }}>
                &copy; {currentYear} Архив героев Беларуси. Все права защищены.
            </p>
        </Foot>
    );
};

export default Footer;