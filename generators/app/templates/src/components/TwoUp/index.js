import React from 'react';
import './styles.module.css';

/**
 * TwoUp component
 * Simple two-column adpative layout
 * @property {HTMLElement} primary
 * @property {HTMLElement} secondary
 * @property {string} orientation
 */
export default function TwoUp({
  primary = null,
  secondary = null,
  orientation = 'default',
  tight = false,
  collapse = false,
  className,
  ...attrs
}) {
  return (
    <div className={className} {...attrs}>
      <div
        styleName="twoUp"
        data-orientation={orientation}
        data-tight={tight}
        data-collapse={collapse}
      >
        <div styleName="panel">{primary}</div>
        <div styleName="panel">{secondary}</div>
      </div>
    </div>
  );
}
