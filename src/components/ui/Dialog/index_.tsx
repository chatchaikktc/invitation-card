import React, { FC } from 'react';
//import ReactDOM from 'react-dom';
import { twMerge } from "@/lib/twMerge";
import './styles.css'

interface dialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  id? : string;
  className: string;
}

const dialog: FC<dialogProps> = ({ isOpen, onClose, children, className ,id}) => {


  if (!isOpen) return null;

  return (
    <div className="dialog-overlay tw-p-5 " id={id}>
      <div className={twMerge("dialog tw-border-t-[3px] tw-border-[#CF3339] tw-border-solid   tw-w-full   tw-h-full tw-rounded-xl  tw-pb-5 md:tw-px-10 tw-px-5", className)}>
        <div className='tw-h-full tw-overflow-y-auto tw-overflow-x-hidden'>
          <button className="close-button" onClick={onClose}></button>
          <div className={twMerge(className, "tw-mb-5 tw-relative")}>
            {children}
          </div>
        </div>
      </div>

    </div>
  );
};

export default dialog;


