import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="mb-6">
          {children}
        </div>
        <button
          onClick={onClose}
          className="bg-orange-600 text-white px-4 py-2 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
