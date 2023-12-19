import { useState, useEffect } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';


import { nanoid } from 'nanoid';


const App = () => {
  const contactList = [
    { id: 'id-1', name: 'Rafal Ogrodowczyk', number: '0-756-934-576' },
    { id: 'id-2', name: 'Agnieszka Ogrodowczyk', number: '0-723-485-638' },
  ];

  const [contacts, setContacts] = useState(contactList);
  const [filter, setFilter] = useState('');



  const onContactCreate = (data) => {
    const duplicateName = contacts.some((contact) => contact.name.toLowerCase() === data.name.toLowerCase());

    if (duplicateName) {
      alert('already there!!');
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  }

  useEffect(() => {
    const stored = localStorage.getItem('contacts');

    if (stored) {
      setContacts(JSON.parse(stored));
    }

  }, []);

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);




  const onGetFilterData = (e) => {
    setFilter(e.target.value);
  }


  const onDeleteContact = (contactId) => {
    setContacts(
      contacts => contacts.filter(contact => contact.id !== contactId)
    );
  }

  const getFilteredContacts = () => {

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filteredNames = getFilteredContacts(contacts);

  return (
    <div className="App">
      <AddContact contacts={contacts} name={contacts.name} number={contacts.number} onFormSubmit={onContactCreate} />
      <Filter filter={filter} onGetFilterData={onGetFilterData} />
      <Contacts contacts={filteredNames} onDelete={onDeleteContact} />
    </div>
  );
}

export default App;