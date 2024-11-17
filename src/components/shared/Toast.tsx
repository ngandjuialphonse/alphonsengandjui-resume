// src/components/shared/Toast.tsx
import { FC } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Toast: FC<ToastProps> = ({ message, type, onClose }) => (
  <div className={`fixed bottom-4 right-4 p-4 rounded ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  }`}>
    {message}
    <button 
      onClick={onClose}
      className="ml-2 text-white"
      aria-label="Close"
    >
      ×
    </button>
  </div>
);