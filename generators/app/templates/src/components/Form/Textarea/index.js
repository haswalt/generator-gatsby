import autosize from 'autosize';
import React from 'react';
import Field from '../Field';
import './styles.module.css';

function initTextarea(textarea) {
  setTimeout(() => autosize(textarea), 0);
}

/**
 * Textarea component
 * A styled and controlled textarea that grows based on input
 * @properties Inherited from <Field>
 */
export default function Textarea({ className, rows, ...attrs }) {
  return (
    <Field
      styleName="textarea"
      InputElement="textarea"
      className={className || ''}
      ref={initTextarea}
      rows={rows || 6}
      {...attrs}
    />
  );
}
