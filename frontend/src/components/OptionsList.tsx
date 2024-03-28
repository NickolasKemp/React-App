import React, { useState } from 'react';
import '../UIComponentsStyle.css'
import { useOutside } from '../hooks/useOutside';

// @ts-ignore
function OptionsList({ children}) {
  const {ref, isShow, setIsShow} = useOutside(false)

  const toggleButtonOff = <div className='icon'>
    <span>move to</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </div>

  const toggleButtonOn = <div className="icon">
    <span>move to</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         className="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  </div>
  return (
    <div className="options-container"
         >
      <button ref={ref} className="toggle-button" onClick={() => setIsShow(!isShow)}>
        {isShow ? toggleButtonOn : toggleButtonOff}
      </button>
      <div className={`options-list ${isShow ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default OptionsList;
