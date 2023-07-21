import {useContext} from 'react'
import{TodosContextType,TodoListType,TodosContext} from '../context/TodosContext'
import styles from './styles/TodoAdd.module.css'

const TodoAdd=({setShow})=>{

const [todos,setTodos]=useContext<TodosContextType>(TodosContext)

const AddTodos=(e)=>{
  if (e.target[1].value===''){
      return null;
}
else{ 
  setTodos(todos=>[...todos,{id: todos.length+1,name: e.target[1].value,completed: e.target[0].checked }])
  e.target[1].value=''
  e.target[0].checked=false
  setShow(false)
}
}

return (
    <form className={styles.cont} onSubmit={(e)=>{e.preventDefault();AddTodos(e);}}>
       <label htmlFor='title'style={{marginBottom:'10px'}}>Checke?:
       <input type="checkbox" className={styles.checkbox} id="title" />
       </label>
       <label htmlFor='text' style={{marginBottom:'10px'}} >Name:
       <input type="text" className={styles.name} id="text" placeholder='Name...(max letter 20)' />
       </label>
       <button type='submit' className={styles.btn}>Save</button>
    </form>
  )
}
export default TodoAdd;