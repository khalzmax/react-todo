import React, { useState } from 'react';
import { Card, Divider, Button } from 'antd';
import { ToDoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';

export const ToDo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'some', description: "any", checked: false },
    { id: 2, title: "one", description: 'another one', checked: false }
  ]);
  const [idCount, setIdCount] = useState(10);

  const renderTodoItems = (todos) => {
    return (
      <div>
        <div class="container"> Unchecked ToDoes :{(todos.filter(todo => todo.checked === false)).length}
          <Button  onClick={removeSelectedItems} type="primary" className="DeleteButton">Delete selected</Button>
        </div>
        <ul className="todo-list">
          {todos.map(todo => <ToDoItem
            key={todo.id}
            item={todo}
            description={todo.description}
            onRemove={onRemove}
            onCheck={onCheck}
          />)}
        </ul>
      </div>
    )
  }

  const removeSelectedItems = () => {
    setTodos(todos.filter(item => !item.checked));
  }

  const onRemove = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      todos.splice(index, 1);
      setTodos([...todos]);
    }
  }

  const onCheck = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      const todo = todos[index];

      todo.checked = !todo.checked;
      todos.splice(index, 1, todo);

      setTodos([...todos]);
    }
  }

  const onSubmit = (title, description) => {
    const todo = {
      title,
      description,
      id: idCount,
      checked: false
    };

    setTodos([...todos, todo]);
    setIdCount(idCount + 1);
  }

  return (
    <Card title={'My todos'} className="todo-card">
      <ToDoForm onSubmit={onSubmit} />
      <Divider />
      {renderTodoItems(todos)}
    </Card>
  );
}
