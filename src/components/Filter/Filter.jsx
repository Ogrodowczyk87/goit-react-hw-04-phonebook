import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onGetFilterData }) => {

    return (
        <div >
            <h2 >Find contacts by name</h2>
            <input type='text'  name='filter' value={filter} onChange={onGetFilterData}></input>
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onGetFilterData: PropTypes.func.isRequired
}

export default Filter;