import React, { useContext, useState } from 'react';
import OptionsModal from './OptionsModal';
import 'react-day-picker/dist/style.css';
import { AppContext } from './Context';
import Tasks from './Tasks';
import { Task } from '../data/tasks';
import EditListModal from './EditListModal';
import {v4 as uuidv4} from 'uuid';
import { ListType } from '../data/lists';
interface ListProps {
  list: {id: string, name: string}
}

const List : React.FC<ListProps> = ({list}) => {

  const {lists, setLists, tasks, setTasks, setCurrentTask, showTask} = useContext(AppContext)

  function removeList(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()
    e.preventDefault()
    const clickedTListId = e.currentTarget.id
    const remainingLists = lists.filter((list: ListType) => list.id !== clickedTListId)
    setLists(remainingLists)
  }

  function createTask() {
   const newTask = {id: uuidv4(), name: ' ', dueDate: "not defined",  description: "",
     status: list.name, priority: "low"}
      setTasks((prev: Task[]) => [...prev, newTask])
    if(newTask) {
      setCurrentTask(newTask)
      showTask()
    }
  }

  return (
      <div className="list">
        <div className="list__title title-list">
          <h3>{list.name}</h3>
          <div className="title-list__actions">
            <span>2</span>
            <OptionsModal>
              <EditListModal id={list.id} >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  <span>Edit</span>
              </EditListModal>
              <button onClick={createTask} className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span>Add new card</span>
              </button>
              <button id={list.id} onClick={(e: any) => removeList(e)} className="icon _red-icon ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                <span>Delete</span>
              </button>
            </OptionsModal>
          </div>
        </div>
        <button onClick={createTask} className="list__button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add new task
        </button>
        <Tasks list={list} />
      </div>
  );
};

export default List;