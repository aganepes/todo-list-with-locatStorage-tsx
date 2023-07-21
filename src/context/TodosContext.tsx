import { createContext,useState,PropsWithChildren, useEffect, useRef, useMemo} from 'react'

export type TodoListType ={ 
    id: number, 
    name: string, 
    completed: boolean 
}
export type TodosContextType={
    todos:TodoListType[],
    setTodos:React.Dispatch<React.SetStateAction<TodoListType[]>>
}
export const TodosContext=createContext<TodosContextType>([]);

export function TodosContextProvider({children}:PropsWithChildren) {
    const [todos, setTodos] = useState<TodoListType[]>([]);
    
    useEffect(()=>{
        const list = JSON.parse(localStorage.getItem('todolist'));
        if(list.length!==0) setTodos(list)  
    },[])

    useEffect(() => {        
        localStorage.setItem('todolist',JSON.stringify(todos));
    },[todos]);


    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {children}
        </TodosContext.Provider>
    );
}
