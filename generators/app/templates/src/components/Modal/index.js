import React from 'react';
import ReactModal from 'react-modal';
import './styles.module.css';

/**
 * Modal component
 * Modal UI component
 * @property {boolean} open Whether modal is open
 * @property {function} onClose Callback when modal requests closing
 */
export default function Modal({
  open = false,
  onClose = () => null,
  children,
  className,
  ...attrs
}) {
  return (
    <ReactModal
      styleName="modal"
      overlayClassName={{
        base: 'modal-overlay',
        afterOpen: 'open',
        beforeClose: 'closing'
      }}
      isOpen={open}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={500}
      ariaHideApp={false}
      className={className || ''}
      {...attrs}
    >
      {children}
    </ReactModal>
  );
}
