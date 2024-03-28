import React, { createContext, useState } from 'react';
import App from '../App';
import { lists as listsData, ListType } from '../data/lists';
import { Task, tasks as tasksData } from '../data/tasks';

export const AppContext = createContext<any>(null)
const Context = () => {

  const [lists, setLists] = useState<ListType[]>(listsData);
  const [tasks, setTasks] = useState<any>(tasksData);
  const [isShownSingleTask, setIsShownSingleTask] = useState<boolean>(false)
  const [currentTask, setCurrentTask] = useState<Task>({ id: '', name: '',
    description: '', status: '', priority: 'not defined', dueDate: ''  })
  function showTask() {
    setIsShownSingleTask(true)
  }

  function hideTask() {
    setIsShownSingleTask(false)
  }



  return (
    <AppContext.Provider value={ {lists, tasks, showTask, hideTask,
      isShownSingleTask, setCurrentTask, currentTask, setTasks, setLists} }>
      <App />
    </AppContext.Provider>
  );
};

export default Context;