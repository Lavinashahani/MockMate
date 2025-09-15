import React from 'react';

const Modal = ({ children, isOpen, onClose, title, hideHeadder }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div className="relative flex flex-col bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-md max-h-[90vh]">
        {/* Header */}
        {!hideHeadder && (
          <div className="flex justify-between items-center px-5 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 transition"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
