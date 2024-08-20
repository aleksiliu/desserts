import React from 'react';
import Button from '../components/Button';

const Modal = ({ isOpen, onClose, title, children, buttonText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#282828] p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="mb-6">
          {children}
        </div>
        <Button text={buttonText} color="secondary" onClick={onClose} className='w-full' />
      </div>
    </div>
  );
};

export default Modal;
