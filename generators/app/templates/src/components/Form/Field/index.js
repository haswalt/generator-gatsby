import React, { forwardRef } from 'react';
import './styles.module.css';

function randomId() {
  return Math.random()
    .toString(36)
    .substring(7);
}

/**
 * Input field wrapper
 * @property {string} label Label for input
 * @property {object} Input Input element for the field
 * @property {boolean} required Mark input as required
 * @property {object} validation Config for success/error messages
 * @property {function} onChange Change callback, passed to input
 */
const Field = forwardRef(
  (
    {
      label = '',
      InputElement = 'input',
      required = false,
      validation = null,
      className = '',
      children,
      ...attrs
    },
    ref
  ) => {
    const syncedId = randomId();

    return (
      <div className={className}>
        {!!label && (
          <label className="label" styleName="label" htmlFor={syncedId}>
            {label}
            {required ? ' *' : ''}
          </label>
        )}
        <InputElement
          ref={ref}
          className="inputEl"
          styleName="inputEl"
          id={syncedId}
          required={required}
          aria-label={!!label ? label : 'Form field'}
          {...attrs}
        >
          {children}
        </InputElement>
        {!!validation && (
          <span
            styleName="status"
            data-valid-message={validation.valid}
            data-invalid-message={validation.invalid}
          />
        )}
      </div>
    );
  }
);
export default Field;
