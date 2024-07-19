import { TasksListContext } from "../context/tasks-list-provider"
import { TaskType } from "../types/Task"
import ClipBoardIcon from '../assets/clipboard-icon.svg'
import { Task } from "./task"
import { useContext } from "react"

export function TasksList() {
  const {changeTasksList, tasks} = useContext(TasksListContext)

  function markTaskOffCheck(id: string) {
    const newTasksListOfSelectedTaskUnchecked:TaskType[] = tasks.map(task => task.id === id ? {...task, check: false} : task)
    
    localStorage.setItem('tasksList', JSON.stringify(newTasksListOfSelectedTaskUnchecked))
    changeTasksList(newTasksListOfSelectedTaskUnchecked)
  }
  function markTaskCheck(id: string) {
    const newTasksListOfSelectedTaskChecked:TaskType[] = tasks.map(task => task.id === id ? {...task, check: true} : task)
    
    localStorage.setItem('tasksList', JSON.stringify(newTasksListOfSelectedTaskChecked))
    changeTasksList(newTasksListOfSelectedTaskChecked)
  }

  function deleteTask(id: string) {
    const newTasksListWithTheTaskRemoved: TaskType[] = tasks.filter(task => task.id !== id)
    
    localStorage.setItem('tasksList', JSON.stringify(newTasksListWithTheTaskRemoved))
    changeTasksList(newTasksListWithTheTaskRemoved) 
  }

  const createdTasksLenght = tasks.length
  const completedTasksLenght = tasks.filter(task => task.check).length

  return (
    <div className="space-y-6">
    <div className="flex justify-between">
      <span className="text-blue-600 text-sm font-bold">
        Tarefas criadas
        <span className="ml-2 rounded-full bg-gray-400 text-gray-200 px-2 py-0.5">
          {createdTasksLenght}
        </span>
      </span>
      <span className="text-purple-600 text-sm font-bold">
        Concluídas
        <span className="ml-2 rounded-full bg-gray-400 text-gray-200 px-2 py-0.5">
          {createdTasksLenght === 0 ? '0' : `${completedTasksLenght} de ${createdTasksLenght}`}
        </span>
      </span>
      </div>
      {tasks.length === 0 ? (
        <div className="rounded-lg border-t border-gray-400 h-60 flex flex-col justify-center items-center gap-4">
          <img src={ClipBoardIcon} alt="Ícone de uma prancheta" />
          <p className="text-center text-gray-300">
            <strong>Você ainda não tem tarefas cadastradas</strong><br/>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
        ) : (
          tasks.map(task => (
            <Task 
              key={task.id} 
              task={task}
              markTaskOffCheck={markTaskOffCheck}
              markTaskCheck={markTaskCheck}
              deleteTask={deleteTask}
            />
          ))
        )
      }
    </div>
  )
}