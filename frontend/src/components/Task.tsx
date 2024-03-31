import React, { useContext } from 'react';
import TaskModal from './TaskModal';
import OptionsModal from './ui/OptionsModal';
import OptionsList from './ui/OptionsList';
import { useDeleteTask } from '../hooks/task/useDeleteTask';
import { useOutside } from '../hooks/useOutside';
import { useUpdateTask } from '../hooks/task/useUpdateTask';
import { useCreateHistoryMessage } from '../hooks/useCreateHistoryMessage';
import { IListResponse } from '../types/list.types';
import { useLists } from '../hooks/list/useLists';

const Task = ({task, list}: any) => {
  const {lists} = useLists()
  const { createHistoryMessage } = useCreateHistoryMessage()
  const {deleteTask, isDeletePending} = useDeleteTask()
  const { ref, isShow, setIsShow } = useOutside(false)
  const { updateTask} = useUpdateTask()

  function editTask() {
    setIsShow(true)
  }

  function removeTask() {
    deleteTask(task.id)
    createHistoryMessage(`You deleted task <span>${task.name}</span> from "${list.label}"`, task.id)
  }

  function changeList(listLabel: any) {
    if(task.status.toLowerCase() !== listLabel.toLowerCase()) {
      const updatedTask = { createdAt: task.createdAt, name: task.name,
        description: task.description, priority: task.priority || undefined, dueDate: task.dueDate,
        status: listLabel.toLowerCase() }
      updateTask({id: task.id, data: updatedTask})

      createHistoryMessage(`You moved task <span>${task.name}</span> from "${list.label}" to "${listLabel}"`, task.id)
    }
  }

  return (
    <div key={task.id} className="task">
      { isShow && <TaskModal list={list} item={task} taskModalRef={ref} setIsShow={setIsShow} />}
      <div className="task__name-container">
        <h4 className="task__name">{task.name}</h4>
        <OptionsModal>
          <button id={task.id} onClick={() => editTask()} className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <span>Edit</span>
          </button>
          <button id={task.id} onClick={() => removeTask()} className='icon _red-icon '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        {task.dueDate}
      </p>
      <div>
        <div className="task__priority">{task.priority ? task.priority : 'not defined'}</div>
      </div>
      <OptionsList>
        {lists?.map((list: IListResponse) => <button id={task.id} key={list.id} onClick={() => changeList(list.label)}>{list.label}</button>)}
      </OptionsList>
    </div>
  )
}

export default Task;