import React from 'react';
import Field from '../Field';

/**
 * Input component
 * Styled and controlled form input
 * @properties Inherited from <Field>
 */
export default function Input({ className = '', ...attrs }) {
  return <Field InputElement="input" className={className} {...attrs} />;
}
