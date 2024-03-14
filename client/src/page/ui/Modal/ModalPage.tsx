import type { SetStateAction } from 'react';
import React from 'react';
import './modal.scss';

type ModalWindowProps = {
  isOpen: boolean;
  onClose: (value: SetStateAction<boolean>) => void;
  children: React.ReactNode;
};

function ModalWindow({ isOpen, onClose, children }: ModalWindowProps): JSX.Element {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default ModalWindow;
