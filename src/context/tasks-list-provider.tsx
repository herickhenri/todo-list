import React, { createContext, useState } from 'react'
import { TaskType } from '../types/Task'

type TasksListContextProps = {
  tasks: TaskType[]
  changeTasksList: (newTasksList: TaskType[]) => void
}

const TasksListContext = createContext<TasksListContextProps>(
  {} as TasksListContextProps,
)

const TasksListProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const tasksList = JSON.parse(localStorage.getItem('tasksList') || '[]') as TaskType[]
  const [tasks, setTasks] = useState<TaskType[]>(tasksList)

  function changeTasksList(newTasksList: TaskType[]) {
    setTasks(newTasksList)
  }

  return (
    <TasksListContext.Provider
      value={{
        tasks,
        changeTasksList
      }}
    >
      {children}
    </TasksListContext.Provider>
  )
}

export { TasksListProvider, TasksListContext }