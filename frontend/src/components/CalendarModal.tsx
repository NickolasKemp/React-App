
import React, { useEffect, useRef, useState } from 'react';
import '../UIComponentsStyle.css'

// @ts-ignore
function CalendarModal({ children, tempTaskDueDate, id, updateTaskDueData }) {
  const [showOptions, setShowOptions] = useState(false);


  function toggleModal(e: any) {
    setShowOptions(!showOptions)
     updateTaskDueData(e)
  }

  return (
    <div className="calendar-modal">
      <button id={id} className="calendar-modal__toggle-button" onClick={(e: any) => toggleModal(e)}>
        {tempTaskDueDate}
      </button>
      <div className={`calendar-modal__options-list ${showOptions ? 'active' : ''}`}>
        <div id={id} onClick={(e: any) => toggleModal(e)}  className="calendar-modal__close" >save & close</div>
        {children}
      </div>
    </div>
  );
}

export default CalendarModal;
