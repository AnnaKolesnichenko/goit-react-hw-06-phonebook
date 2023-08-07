import PropTypes from 'prop-types';
import css from './contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setDelete } from 'redux/contactsReducer';
import { contactState, filterState } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactState);
  const filter = useSelector(filterState);

  const onDelete = contactId => {
    dispatch(setDelete(contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  //render
  const filteredNames = getFilteredContacts(contacts);

  if(filteredNames.length > 0) {
    return (
        <div className={css.main}>
            <h1 className={css.title}>Contacts</h1>
            <ul className={css.list}>
                {filteredNames.length === 0 ? 'There is no contact added' : filteredNames.map((contact) => {
                    return <li className={css.list_item} key={contact.id}>
                        {contact.name}: {contact.number}
                        <button className={css.delete_btn} onClick={() => onDelete(contact.id)}>Delete</button>
                        </li>
                })}
                {/* <li className={css.list_item}>{name}
                </li> */}
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