import React, { useState } from 'react';
import '../UIComponentsStyle.css'

// @ts-ignore
function PriorityList({ children, currentPriority}) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="priority-list__container"
         >
      <button className="priority-list__toggle-button" onClick={() => setShowOptions(!showOptions)}>
        {currentPriority}
      </button>
      <div className={`priority-list__options-list ${showOptions ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default PriorityList;
