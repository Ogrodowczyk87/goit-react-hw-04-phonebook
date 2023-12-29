import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const Contacts = ({ contacts, onDelete }) => {

    if (contacts.length > 0) {
        return (
            <div >
                <h1 >Contacts</h1>
                <ul >
                    {contacts.length === 0 ? 'There is no contact' : contacts.map((contact) => {
                        return <li key={contact.id}>
                            {contact.name}: {contact.number}
                            <button onClick={() => onDelete(contact.id)}>Delete</button>
                        </li>
                    })}

                </ul>
            </div>
        )
    } else {
        return "There is nothing added here yet..."
    }

}


Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
    })),
    onDelete: PropTypes.func
}

export default Contacts;