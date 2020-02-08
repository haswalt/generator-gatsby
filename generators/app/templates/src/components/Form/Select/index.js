import React from 'react';
import ReactSelect from 'react-select';
import Field from '../Field';
import './styles.module.css';

/**
 * Select component
 * Select form input
 * @property {array} options Select options
 * @properties Inherited from <Field>
 */
export default function Select({ options = [], className = '', ...attrs }) {
  return (
    <Field
      styleName="select"
      InputElement={ReactSelect}
      options={options}
      classNamePrefix="select"
      className={className}
      {...attrs}
    />
  );
}
