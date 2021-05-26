import React from 'react';
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'


 export type ITodo = {
  title: string | undefined 
  id: number
  completed: boolean
}

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([])

  React.useEffect(() => {
     const res = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
      setTodos(res)
  }, [])

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


const addHandler = (title: string) => {
   const newTodo =  {
     title: title,
     id: Date.now(),
     completed: false
  }
  setTodos(prev => [newTodo, ...prev])
}

const togleHandler = (id: number) => {
   setTodos(prev =>
     prev.map(todo => {
       if(todo.id === id){
         todo.completed = !todo.completed
       }
       return todo
     })
    )
}

const removeHandler = (id: number) => {
   setTodos(prev => prev.filter(todo => todo.id !== id))
}

const editTask = (id: number) => {
  const task = prompt('Edit Task')
  setTodos(prev =>
    prev.map(todo => {
      if(todo.id === id){
        todo.title = task?.toString()
      }
      return todo
    })
   )
}

  return (
    <div className="container">
      <h3>Test Elecctro</h3>
        <TodoForm add={addHandler}/>
        <TodoList 
          todos={todos} 
          onToggle={togleHandler} 
          onRemove={removeHandler}
          onEdit={editTask}
      />
    </div>
  );
}

export default App;
