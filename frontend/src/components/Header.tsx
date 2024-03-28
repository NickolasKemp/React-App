import React from 'react';
import NewListModal from './NewListModal';

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__title">My task board</h2>
      <div className="header__actions actions-header">
        <button className="actions-header__history header-action">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          History
        </button>
        <NewListModal>
          <button className="actions-header__list header-action">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create new list
          </button>
        </NewListModal>
      </div>
    </div>
  );
};

export default Header;