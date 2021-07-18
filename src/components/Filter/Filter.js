import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Find contact by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
