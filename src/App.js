import { useEffect } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

import './App.css';
import { nanoid } from 'nanoid';
import { setContact, setDelete, setFilter, setFromStorage } from 'redux/contactsReducer';

const App = () => {

  const contacts = useSelector(state => {
    console.log('state', state);
    return state.contacts.contacts;
  });

  const filter = useSelector(state => {
    return state.contacts.filter;
  });

  const dispatch = useDispatch();

  //adding and creating contacts
  const onContactCreate = data => {
    const duplicateName = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (duplicateName) {
      alert('already there!!');
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };
    dispatch(setContact(newContact));
    // dispatch({ type: SET_CONTACT, payload: newContact });
  };

  useEffect(() => {
    const stored = localStorage.getItem('contacts');

    if (stored) {
      const contactsFromStorage = JSON.parse(stored);
      dispatch(setFromStorage(contactsFromStorage));
      // dispatch({
      //   type: ADD_CONTACTS_FROM_STORAGE,
      //   payload: contactsFromStorage,
      // });
    }
  }, [dispatch]);

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  //filter by term
  const onGetFilterData = e => {
    dispatch(setFilter(e.target.value));
    // dispatch({ type: SET_FILTER, payload: e.target.value });
  };

  //deleting data
  const onDeleteContact = contactId => {
    dispatch(setDelete(contactId));
    // dispatch({ type: SET_DELETE, payload: contactId });
  };

  const getFilteredContacts = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  //render
  const filteredNames = getFilteredContacts(contacts);

  return (
    <div className="App">
      <AddContact
        contacts={contacts}
        name={contacts.name}
        number={contacts.number}
        onFormSubmit={onContactCreate}
      />
      <Filter filter={filter} onGetFilterData={onGetFilterData} />
      <Contacts contacts={filteredNames} onDelete={onDeleteContact} />
    </div>
  );
};

export default App;
