import PropTypes from 'prop-types';
import { Label } from './FilterStyled';

const Filter = ({ filter, onChange }) => {
    return (
        <Label>
            <input type='text' value={filter} onChange={onChange} />
        </Label>
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}