import React, { createContext, useEffect, useState } from 'react';
import App from '../App';
import { lists as listsData, ListType } from '../data/lists';
import { Task, tasks as tasksData } from '../data/tasks';

export const AppContext = createContext<any>(null)
const Context = () => {

  const [lists, setLists] = useState<ListType[]>(listsData);
  const [tasks, setTasks] = useState<any>(tasksData);
  const [currentTask, setCurrentTask] = useState<Task>({ id: '', name: '',
    description: '', status: '', priority: 'not defined', dueDate: ''  })


  return (
    <AppContext.Provider value={ { lists, tasks, setCurrentTask, currentTask, setTasks, setLists} }>
      <App />
    </AppContext.Provider>
  );
};

export default Context;