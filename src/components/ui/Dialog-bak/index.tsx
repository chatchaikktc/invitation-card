import React, { FC } from 'react';
//import ReactDOM from 'react-dom';
import { twMerge } from "@/lib/twMerge";
import './styles.css'

interface dialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className: string;
}

const dialog: FC<dialogProps> = ({ isOpen, onClose, children, className }) => {


  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className={twMerge("dialog",className)}>
        <button className="close-button" onClick={onClose}>
          
        </button>
        {children}
      </div>
    </div>
  );
};

export default dialog;


