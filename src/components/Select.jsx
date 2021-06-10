import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, label, optionList } = this.props;
    return (
      <label htmlFor={ `${name}-select` }>
        {`${label}:`}
        <select id={ `${name}-select` } name={ name }>
          {
            optionList.map(
              (option) => (
                <option
                  key={ option }
                  value={ option.toLowerCase() }
                >
                  {option}
                </option>
              ),
            )
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  optionList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Select;
