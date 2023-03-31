import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ label, name, className, value, onChange }) {
  const onChangeInput = (e) => {
    onChange((prevState) => ({
      ...prevState,
      [`card${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)}`]:
        e.target.checked,
    }));
  };

  return (
    <div className={ `form-control ${className}` } data-type="checkbox">
      <label className="label" htmlFor={ name }>{ label }</label>
      <input
        type="checkbox"
        id={ name }
        name={ name }
        checked={ value }
        onChange={ onChangeInput }
        data-testid={ `${name}-input` }
        className="input"
      />
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.any, PropTypes.string, PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
};

export default Checkbox;
