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
import logo from '../../images/80.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Foot>
            <Container>
                <Information>
                    <Logo src={logo} />
                    <div>
                        <h2 style={{ color: '#fff', textAlign: 'center' }}>
                            «Информационный портал о героях»
                        </h2>
                        <ContactsList>
                            <InfoLi>
                                <InfoLink href="/">Информация о сайте</InfoLink>
                            </InfoLi>
                            <InfoLi>
                                <InfoLink href="/">Контактные данные</InfoLink>
                            </InfoLi>
                            <InfoLi>
                                Сайт создан участником для показа технического творчества.
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