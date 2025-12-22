import { ContactsList, Icon, InfoLi } from './FooterStyle.styled.js';
import map from '../../../data/dataContacts.js';

const ContactsListComp = () => {
    return (
        <ContactsList>
            {[...map].map(([icon, info]) => (
                <InfoLi key={icon}>
                    <Icon src={icon} />
                    <p>{info}</p>
                </InfoLi>
            ))}
        </ContactsList>
    );
};

export default ContactsListComp;