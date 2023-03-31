import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, name, type, className, value, onChange }) {
  const onChangeInput = (e) => {
    onChange((prevState) => ({
      ...prevState,
      [`card${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)}`]:
        e.target.value,
    }));
  };

  return (
    <div className={ `form-control ${className}` } data-type={ type }>
      <label className="label" htmlFor={ name }>{ label }</label>
      <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ onChangeInput }
        data-testid={ `${name}-input` }
        className="input"
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.any, PropTypes.string, PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
