import { Check, Trash } from "@phosphor-icons/react";
import { TaskType } from "../types/Task";

interface TaskProps {
  task: TaskType,
  markTaskOffCheck: (id: string) => void
  markTaskCheck: (id: string) => void
  deleteTask: (id: string) => void
}

export function Task({ task, markTaskCheck, markTaskOffCheck, deleteTask } : TaskProps) {
  return (
    <div className="text-sm bg-gray-500 border border-gray-400 rounded-lg p-4 flex items-start gap-3">
      {task.check ? (
        <button title="Marcar tarefa como não concluída" onClick={() => markTaskOffCheck(task.id)}>
          <Check size={16} className="bg-purple-700 rounded-full p-1 cursor-pointer"/>
        </button>
      ) : (
        <button title="Marcar tarefa como concluída" onClick={() => markTaskCheck(task.id)}>
          <div className="bg-transparent border-blue-500 border-2 rounded-full w-4 h-4 cursor-pointer hover:bg-blue-800/20 transition-colors"/>
        </button>
      )}
      <p className={`${task.check ? 'text-gray-300 line-through' : ''} flex-1`}>{task.content}</p>
      <button title="Deletar tarefa" onClick={() => deleteTask(task.id)}>
        <Trash size={24} className="text-gray-300 p-1 rounded hover:bg-gray-400 hover:text-red-400 transition-colors"/>
      </button>
    </div>
  )
}