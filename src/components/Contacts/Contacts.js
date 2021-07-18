import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => onClick(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contacts;
