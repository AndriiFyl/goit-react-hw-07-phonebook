// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './Filter.module.css';

// const Filter = ({ value, onChange }) => {
//   console.log(value);

//   return (
//     <label className={css.filter__wrapper}>
//       Find contacts by Name
//       <input type="text" value={value} onChange={onChange}></input>
//     </label>
//   );
// };

// export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  return (
    <label className={css.filter__wrapper}>
      Find contacts by Name
      <input type="text" onChange={changeFilter}></input>
    </label>
  );
};

export default Filter;
