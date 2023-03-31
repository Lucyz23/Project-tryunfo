import React from 'react';
import PropTypes from 'prop-types';

function Select({ label, name, options, className, value, onChange }) {
  const onChangeInput = (e) => {
    onChange((prevState) => (
      {
        ...prevState,
        [`card${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)}`]:
          (e.target.type === 'checkbox' ? e.target.checked : e.target.value),
      }
    ));
  };

  return (
    <div className={ `form-control ${className}` }>
      <label htmlFor={ name } className="label">{ label }</label>
      <select
        name={ name }
        data-testid={ `${name}-input` }
        className="input"
        value={ value }
        onChange={ onChangeInput }
      >
        {options.map((option) => <option key={ option }>{option}</option>)}
      </select>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  className: '',
};

export default Select;
