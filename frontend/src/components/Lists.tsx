import React from 'react';
import List from './List';
import { useLists } from '../hooks/list/useLists';
import { IListResponse } from '../types/list.types';

const Lists = () => {

  const { lists} = useLists()

  return (
    <div className="lists-container">
      {
        lists?.length ?
        lists.map((list: IListResponse) =>
         <List key={list.id} list={list} />
        )
          : <h3 className="_nodata-title" >There are not lists. Create one</h3>
      }
    </div>
  )
}

export default Lists;