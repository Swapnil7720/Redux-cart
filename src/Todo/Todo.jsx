import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const Todo = () => {
  return (
    <div className='row todo-body mx-auto'>
            <div className="Todo">
                <form className="TodoForm" > 
                      <input  type="text" className="todo-input" placeholder='What is the task today?' />
                      <button type="submit" className='todo-btn'>Add Task</button>
                </form>
           <div>
        {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
        </div>
    </div>
    </div>
  )
}
export default Todo