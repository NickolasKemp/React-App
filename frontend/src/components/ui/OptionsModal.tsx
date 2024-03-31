import React, { useState } from 'react';
import '../../UIComponentsStyle.css'
import { useOutside } from '../../hooks/useOutside';

// @ts-ignore
function OptionsModal({ children }) {
  const {ref, isShow, setIsShow} = useOutside(false)

  return (
    <div ref={ref} className="options-modal">
      <button className="  options-modal__toggle-button _ellipsis-vertical" onClick={() => setIsShow(!isShow)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
             className="w-4 h-4">
          <path
            d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
        </svg>
      </button>

      <div className={`options-modal__options-list ${isShow ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default OptionsModal;
