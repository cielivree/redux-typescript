import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const TodoList: React.FC = () => {
    const { page, error, isLoading, todos, limit } = useTypedSelector(state => state.todo)
    const { fetchTodos, setTodoPage } = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])
        
    if (isLoading) {
        return <h1>Is loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
        
    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>
                    {todo.id} - {todo.title} 
                </div>)
            }
            <div style={{display: 'flex', marginTop: 10}}>
                {pages.map(p =>
                    <div
                        style={{ border: p === page ? '2px solid green' : '1px solid grey', borderRadius: 100, padding: 7, marginRight: 3, cursor: 'pointer' }}
                        onClick={() => setTodoPage(p)}
                    >{p}</div>)
                }
            </div>
        </div>
    )
    }

export default TodoList