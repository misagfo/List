import React from 'react'
import { ITodo } from '../App'

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
    onEdit(id: number): void
 }
  

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle, onEdit}) => {
    return (
        <ul>
            {todos.map(todo => {
             return (
                 <li key={todo.id} className="todo">
                  <label>
                    <input 
                     type="checkbox" 
                     checked={todo.completed} 
                     onChange={onToggle.bind(null, todo.id)}
                   />
                    <span>{todo.title}</span>
                    <div className="icons">
                       <i className="material-icons" onClick={() => onEdit(todo.id)}>create</i>
                       <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>delete</i>
                    </div>
                </label>
            </li>
                )
            })}
           
        </ul>
    )
}