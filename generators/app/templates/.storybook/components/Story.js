import React from 'react';
import '../../src/containers/App/css/index.css';

/**
 * Story component
 * Wraps stories and provides necessary gloabls and layout
 */
export default function Story({ children }) {
  return <div style={{ margin: '1rem' }}>{children}</div>;
}
