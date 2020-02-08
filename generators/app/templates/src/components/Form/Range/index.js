import React from 'react';
import { Range as ReactRange } from 'react-range';
import Field from '../Field';
import './styles.module.css';

/**
 * Range component
 * Range input
 * @properties inherited from <Field>
 */
export default function Range({ value, onChange, className = '', ...attrs }) {
  return (
    <Field
      InputElement={ReactRange}
      values={[value]}
      onChange={values => onChange(values[0])}
      className={className}
      renderTrack={({ props, children }) => (
        <div styleName="track" {...props}>
          {children}
        </div>
      )}
      renderThumb={({ props }) => <div styleName="thumb" {...props} />}
      {...attrs}
    />
  );
}
