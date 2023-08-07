import css from './filter.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsReducer';
import { filterState } from 'redux/selectors';

const Filter = () => {
    const filter = useSelector(filterState);
    const dispatch = useDispatch();

    const onGetFilterData = e => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div className={css.container}>                
                <h2 className={css.find_title}>Find contacts by name</h2>
                <input type='text' className={css.find_input} name='filter' value={filter} onChange={onGetFilterData}></input>
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onGetFilterData: PropTypes.func.isRequired
}

export default Filter;