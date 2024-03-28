import React, { useContext, useEffect, useState } from 'react';
import OptionsModal from './OptionsModal';
import OptionsList from './OptionsList';
import { AppContext } from './Context';
import TaskModal from './TaskModal';
import { Task } from '../data/tasks'
import { ListType } from '../data/lists'


interface TasksProps {
  list : {id: string, name: string}
}

const Tasks:React.FC<TasksProps> = ({list}) => {
  const { tasks, lists, showTask, setCurrentTask, setTasks } = useContext(AppContext)
  const [currentListTasks, setCurrentListTasks] = useState<Task[]>([])
  useEffect(() => {
    function filterCurrentListTask() {
      setCurrentListTasks(tasks.filter(
        (task: { status: string; }) => task.status.toLowerCase() === list.name.toLowerCase()))
    }
    filterCurrentListTask()
  }, [tasks]);

  function editTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()
    e.preventDefault()
    const clickedTaskId = e.currentTarget.id
    const currentTask = tasks.find((task: Task) => task.id === clickedTaskId)
    if(currentTask) {
      setCurrentTask(currentTask)
      console.log("current task", currentTask)
      showTask()
    }
  }

  function removeTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const clickedTaskId = e.currentTarget.id
    const remainingTasks = tasks.filter((task: Task) => task.id !== clickedTaskId)
    setTasks(remainingTasks)
  }

  function changeList(obj: any) {
    const {listName, e} = obj
    const taskId = e.currentTarget.id
    setTasks((prev: Task[]) => prev.map((task: Task) => task.id === taskId ?
      {...task, status: listName} : task ))
  }

  return (
    <div className="tasks__container">
      <TaskModal list={list}/>
      {
        currentListTasks.map((task: Task) =>
          <div key={task.id} className="task">
            <div className="task__name-container">
              <h4 className="task__name">{task.name}</h4>
              <OptionsModal>
                <button id={task.id} onClick={(e: any) => editTask(e)} className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  <span>Edit</span>
                </button>
                <button id={task.id} onClick={(e:any) => removeTask(e)} className='icon _red-icon '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  <span>Delete</span>
                </button>
              </OptionsModal>
            </div>
            <p className='task__description'>
              {task.description}
            </p>
            <p className="task__date _calendar">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              {task.dueDate}
            </p>
            <div>
              <div className="task__priority">{task.priority}</div>
            </div>
            <OptionsList>
              {lists.map((list: ListType) => <button id={task.id} key={list.id} onClick={(e: any) => changeList({ e, listName: list.name  })}>{list.name}</button>)}
            </OptionsList>
          </div>
        )
      }
    </div>
  );
};

export default Tasks;