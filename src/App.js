import { useState, useEffect } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

import './App.css';
import { nanoid } from 'nanoid';


const App = () => {
    const contactList = [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ];

    const [contacts, setContacts] = useState(contactList);
    const [filter, setFilter] = useState('');



  //adding and creating contacts
  const onContactCreate = (data) => {
    const duplicateName = contacts.some((contact) => contact.name.toLowerCase() === data.name.toLowerCase());

    if(duplicateName) {
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

        if(stored) {
            setContacts(JSON.parse(stored));
        }

    }, []);

    useEffect(() => {
        if(contacts) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }, [contacts]);



  //filter by term
  const onGetFilterData = (e) =>{
    setFilter(e.target.value);
  }

  //deleting data
  const onDeleteContact = (contactId) => {
    setContacts(
      contacts => contacts.filter(contact => contact.id !== contactId)
    );
  }

  const getFilteredContacts = () => {
    // const {contacts, filter} = this.state;
    return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  //render
    // const {contacts, name, number, filter} = this.state;
    const filteredNames = getFilteredContacts(contacts);

    return (
      <div className="App">
        <AddContact contacts={contacts} name={contacts.name} number={contacts.number} onFormSubmit={onContactCreate}/>
        <Filter filter={filter} onGetFilterData={onGetFilterData}/>
        <Contacts contacts={filteredNames} onDelete={onDeleteContact}/>
      </div>
    );
  }

export default App;
