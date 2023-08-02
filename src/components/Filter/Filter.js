import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({filter, onGetFilterData}) => {

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