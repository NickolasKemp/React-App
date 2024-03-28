import React, { useContext }from 'react';
import List from './List';
import { AppContext } from './Context';
import { ListType } from '../data/lists'

const Lists = () => {

  const {lists} = useContext(AppContext)

  return (
    <div className="lists-container">
      {
        lists.map((list: ListType) =>
         <List key={list.id} list={list} />
        )
      }
    </div>
  )
}

export default Lists;