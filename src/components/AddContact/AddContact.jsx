import { useState } from 'react';
// import css from './AddContactForm.module.css';
import PropTypes from 'prop-types';


//! add reset form! 

const AddContact = (props) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const handleFormNameChange = (e) => {
        setName(
            e.target.value,
        );
    };

    const handleFormNumberChange = (e) => {
        setNumber(
            e.target.value,
        );
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onFormSubmit({ name, number });
        resetForm();

    };
    const resetForm = () => {
        setName('');
        setNumber('');
    };


    return (
        <div >
            <form onSubmit={handleFormSubmit}>
                <label htmlFor=''>
                    <h1>Name</h1>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleFormNameChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. 
                        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label htmlFor=''>
                    <h1 >Number</h1>
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleFormNumberChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type='submit' >Add contact</button>
            </form>
        </div>
    )
}




AddContact.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}

export default AddContact;