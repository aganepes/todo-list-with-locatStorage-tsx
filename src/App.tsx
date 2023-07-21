import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'
import {TodosContextProvider} from './context/TodosContext'
import './App.css'
import img from './assets/react.svg'
const styles={
  cont:{
    backgroundColor:'#faebd7',
    display:'flex',
    width:'80%',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 'auto auto',
    borderRadius:'5px',
    padding: '10px',
    paddingTop: '0px',
    position: 'relative'
  },
  title:{
    backgroundColor:'#8C8C8C',
    display:'flex',
    height:'60px',
    width:"100%",
    paddingLeft:'10px',
    paddingRight:'10px',
    borderRadius:'5px',
    justifyContent:'space-between',
    alignItems:'center',
    boxShadow:'0px 2px 4px black'
    }
}

const App=()=>{
  const [show,setShow]=useState<boolean>(false)
  return (
<TodosContextProvider>
    <div style={styles.cont} className='cont'>
        <div className="title" style={styles.title}>
          <img src={img} alt="" style={{width:'30px'}}/>
          <h1 className='text' style={{color:'white',textShadow:'2px 0 4px black'}}>Todo List</h1>
          <button className='btn' onClick={()=>setShow(!show)}>Add</button>
        </div>
        {show ? <TodoAdd setShow={setShow}/> : ''}
        <TodoList />
    </div>
</TodosContextProvider>
  )
}
export default App;


