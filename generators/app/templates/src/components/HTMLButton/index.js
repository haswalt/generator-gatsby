import React from 'react';
import './styles.module.css';

/**
 * HTMLButton component
 * Unstyled button element
 */
export default function HTMLButton({ children, className, ...attrs }) {
  return (
    <button styleName="button" className={className || ''} {...attrs}>
      {children}
    </button>
  );
}
