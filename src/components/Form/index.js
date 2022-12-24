import React from 'react';
import PropTypes from 'prop-types';

//form
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

Form.propTypes = {
  novaTarefa: PropTypes.string.isRequired,
};
