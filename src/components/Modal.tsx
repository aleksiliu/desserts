import React from 'react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  buttonText: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, buttonText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#282828] p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="mb-6">
          {children}
        </div>
        <Button text={buttonText} color="secondary" onClick={onClose} className='w-full font-bold' />
      </div>
    </div>
  );
};

export default Modal;
