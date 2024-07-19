import { NewTaskForm } from "./components/new-task-form"
import { TasksList } from "./components/tasks-list"
import { TasksListProvider } from "./context/tasks-list-provider"

export function App() {
  return (
    <div>
      <header className="bg-gray-700 h-48 flex justify-center items-center">
        <img src="/logo.svg" alt="Logo do todo" />
      </header>
      
      <div className="max-w-3xl mx-auto space-y-16 mb-20">
        <TasksListProvider>
          <NewTaskForm />

          <TasksList />
        </TasksListProvider>
      </div>
    </div>
  )
}