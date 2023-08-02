import { useState } from 'react';
import css from './addContact.module.css';
import PropTypes from 'prop-types';

const AddContact = (props) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    // state = {
    //     name: '',
    //     number: ''
    // };

    const handleFormNameChange = (e) => {
        setName(
            e.target.value ,
        );
    };

    const handleFormNumberChange = (e) => {
        setNumber(
            e.target.value ,
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
        // this.setState({name: ' ', number: ' '});
    };

        return (
            <div className={css.main}>
                {/* <h1 className={css.main_title}>Name</h1> */}
                <form className={css.form} onSubmit={handleFormSubmit}>
                    <label htmlFor=''>
                    <h1 className={css.main_title}>Name</h1>
                        <input
                        className={css.name_input}
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
                    <h1 className={css.main_title}>Number</h1>
                        <input 
                            className={css.name_input}
                            type="tel"
                            name="number"
                            value={number}
                            onChange={handleFormNumberChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                        <button type='submit' className={css.add_btn}>Add contact</button>
                </form>
            </div>
        )
    }


AddContact.propTypes = {

    onFormSubmit: PropTypes.func.isRequired
}

export default AddContact;