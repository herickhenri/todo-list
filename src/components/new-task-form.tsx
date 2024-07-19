import { FormEvent, useContext, useState } from "react";
import { TasksListContext } from "../context/tasks-list-provider"
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from "@phosphor-icons/react";

export function NewTaskForm() {
  const {changeTasksList, tasks} = useContext(TasksListContext)

  const [newTaskInput, setNewTaskInput] = useState('')

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    const newTasksListWithNewTask = [
      {
        check: false,
        content: newTaskInput,
        id: uuidv4()
      } ,...tasks]

    localStorage.setItem('tasksList', JSON.stringify(newTasksListWithNewTask))
    changeTasksList(newTasksListWithNewTask)

    setNewTaskInput('')
  }
  
  const inputTaskIsEmpty = newTaskInput.length === 0

  return (
    <form className="flex gap-2 items-center mx-auto -mt-7" onSubmit={handleNewTask}>
      <input 
        className="flex-1 bg-gray-500 border border-gray-700 rounded-lg p-4 placeholder:text-gray-300 outline-none"
        type="text"
        value={newTaskInput}
        onChange={(e) => setNewTaskInput(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button 
        className="font-bold text-white bg-blue-800 rounded-lg flex items-center p-4 gap-2 hover:bg-blue-600 disabled:bg-blue-600 disabled:cursor-not-allowed transition-colors"
        disabled={inputTaskIsEmpty}
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </form> 
  )
}