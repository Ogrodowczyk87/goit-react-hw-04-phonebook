import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const Contacts = ({ contacts, onDelete }) => {

    if (contacts.length > 0) {
        return (
            <div >
                <h1 >Contacts</h1>
                <ul >
                    {contacts.length === 0 ? 'There is no contact added' : contacts.map((contacts) => {
                        return <li key={contacts.id}>
                            {contacts.name}: {contacts.number}
                            <button onClick={() => onDelete(contacts.id)}>Delete</button>
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