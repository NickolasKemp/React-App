import React from 'react';
import { ITaskResponse } from '../types/task.types';
import  { IList } from '../types/list.types';
import Task from './Task';


interface ITasksProps {
  list : IList
  items: ITaskResponse[] | undefined
}

const Tasks = ({list, items}: ITasksProps) => {

  function sortTasksByData(tasks:any) {
    const tasksCopy = tasks.slice();

    tasksCopy.sort((a: any, b:any) => {
      const aCreated = (a.createdAt)
      const bCreated = (b.createdAt)
      const aUpdated = a.updatedAt
      const bUpdated = b.updatedAt

      const latestA = aCreated > aUpdated ? aCreated : aUpdated
      const latestB = bCreated < bUpdated ? bCreated : bUpdated

      if (latestA < latestB) return 1
      if (latestA > latestB) return -1

      return 0
    })

    return tasksCopy
  }

  const sortedTasks = React.useMemo(() => {
    return sortTasksByData(items || [])
  }, [items])

  return (
    <div className="tasks__container">
      {
        items &&
        sortedTasks.map((task: ITaskResponse) =>
          <Task key={task.id} task={task} list={list} />
        )
      }
    </div>
  );
};

export default Tasks;