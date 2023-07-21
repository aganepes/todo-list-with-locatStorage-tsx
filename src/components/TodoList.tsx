import React,{useContext} from 'react'
import { FaRegTrashCan } from 'react-icons/fa6';
import{TodosContextType,TodoListType,TodosContext} from '../context/TodosContext'
import styles from './styles/TodoList.module.css'

const TodoList:React.FC=()=>{
  const [todos,setTodos]=useContext<TodosContextType>(TodosContext)
  const DeleteTodos=(id:string)=>{
    const value:TodoListType[]=todos.filter((value)=>value.id!=id);
    setTodos(value)
  }
  
    return (
      <div className={styles.cont}>
    { todos.map((value:TodoListType)=>(
    <div className={styles.todo} key={value.id}>
    <input type='checkbox' defaultChecked={value.completed} />
    <p className={styles.name}>{value.name}</p>
    <span className={styles.btn} onClick={()=>DeleteTodos(value.id)}>
    <FaRegTrashCan className={styles.btn} />
    </span>
    </div>
      )) }
      </div>
    )
  }
  export default TodoList