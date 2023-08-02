import { Component } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

import './App.css';
import { nanoid } from 'nanoid';


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }


  //adding and creating contacts
  onContactCreate = (data) => {
    const duplicateName = this.state.contacts.some((contact) => contact.name.toLowerCase() === data.name.toLowerCase());

    if(duplicateName) {
      alert('already there!!');
      return;
    } 
    
      const newContact = {
        ...data,
        id: nanoid(),
      };
      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }))
  }

  componentDidMount() {
    const stored = JSON.parse(localStorage.getItem('contacts'));
    console.log(stored);

    if(stored) {
      this.setState({contacts: stored});
    }

  }

  componentDidUpdate(prevProps, prevState) {
      if(this.state.contacts !== prevState.contacts) {
      console.log('renewed');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  //filter by term
  onGetFilterData = (e) =>{
    this.setState({
      filter: e.target.value 
  })
  }

  //deleting data
  onDeleteContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId)
    });
  }

  getFilteredContacts = () => {
    const {contacts, filter} = this.state;
    return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  //render
  render() {
    const {contacts, name, number, filter} = this.state;
    const filteredNames = this.getFilteredContacts(contacts);

    return (
      <div className="App">
        <AddContact contacts={contacts} name={name} number={number} onFormSubmit={this.onContactCreate}/>
        <Filter filter={filter} onGetFilterData={this.onGetFilterData}/>
        <Contacts contacts={filteredNames} onDelete={this.onDeleteContact}/>
      </div>
    );
  }
}

export default App;
