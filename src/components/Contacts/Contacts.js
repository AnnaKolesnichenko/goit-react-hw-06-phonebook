import PropTypes from 'prop-types';
import css from './contacts.module.css';

const Contacts = ({contacts, onDelete}) => {

  if(contacts.length > 0) {
    return (
        <div className={css.main}>
            <h1 className={css.title}>Contacts</h1>
            <ul className={css.list}>
                {contacts.length === 0 ? 'There is no contact added' : contacts.map((contact) => {
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