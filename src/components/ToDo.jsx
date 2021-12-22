import React, {useState} from 'react';
import {Card, Divider} from 'antd';
import {ToDoItem} from './ToDoItem';
import {ToDoForm} from './ToDoForm';
import {TodoistApi} from '@doist/todoist-api-typescript'
import ReactDOM from 'react-dom';


const api = new TodoistApi('e5bf01381adbc8978a97620846a2288baef8537f');

export const ToDo = () => {
    const getTodos = async () =>
    {
        await api.getTasks().then((data) => {
            ReactDOM.render(renderTodoItems(data), document.getElementById("toDoContainer"))
        });
    }

    const onUpdate = (id,value) => {
        api.updateTask(id, {content:value});
        getTodos();
    }

    const renderTodoItems = (todos) => {
        return (
            <ul className="todo-list">
                {
                    todos.map(todo => <ToDoItem
                            key={todo.id}
                            item={todo}
                            onCheck={onCheck}
                            onUpdate={onUpdate}
                        />
                    )
                }
            </ul>
        )
    }



    const onCheck = async (id) => {
        api.deleteTask(id).then(async ()=>{await getTodos()});
    }

    const onSubmit = async (name) => {
        api.addTask({content:name}).then(async () => await getTodos());
    }

    getTodos();

    return (
        <Card title={'My todos'} className="todo-card mt-5">
            <ToDoForm onSubmit={onSubmit}/>
            <Divider/>
            <div id="toDoContainer"/>
        </Card>
    );
}
