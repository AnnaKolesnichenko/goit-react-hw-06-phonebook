// import { useEffect } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

import './App.css';

const App = () => {

  
  return (
    <div className="App">
      <AddContact />
      <Filter  />
      <Contacts  />
    </div>
  );
};

export default App;
