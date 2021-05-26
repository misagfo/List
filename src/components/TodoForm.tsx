import React from 'react'


type TodoFormProps = {
    add(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({ add }) => {
    const [title, setTitle] = React.useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
         setTitle(e.target.value)
    }

    const handlerClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(title === ''){
            return null
        }
        add(title)
        setTitle('')
   }

    return (
        <div className="input-field mt2">
            <input 
              onChange={changeHandler}
              value={title}
              type="text" id="title" 
              placeholder="Type Task"/>
           <label htmlFor="title" className="active">Type name Task</label>

           <button onClick={handlerClick} className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
           </button>

        </div>
    )

}