import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <label className={css.inputName}>Find contacts by Name </label>
    <input
      type="text"
      name="filter"
      placeholder="Search 🔍"
      value={filter}
      onChange={handleChange}
      className={css.search}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string,
  handleChange: propTypes.func,
};
