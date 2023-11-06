import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../actions/todoSlice';

const Todos = () => {
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();

  return (
    <div className='flex'>
        <div>
            {
                todos.map((todo)=>(
                    <li>
                        {todo.text}
                        <button onClick={()=>((dispatch(removeTodo(todo.id))))}>Remove</button>
                    </li>
                ))
            }
        </div>
    </div>
  )
}

export default Todos