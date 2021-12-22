import React from 'react';
import {Button, Checkbox} from 'antd';

export const ToDoItem = (props) => {
    const {item, onCheck, onUpdate} = props;

    const onCheckItem = () => {
        if (onCheck) {
            onCheck(item.id);
        }
    }

    const onUpdateItem = (event) => {
        if (onUpdate) {
            let value = event.currentTarget.parentElement.children[1].value;
            let id = item.id;
            onUpdate(id, value);
        }
    }

    return (
        <li className="py-2 d-flex justify-content-between" key={item.id}>
            <input
                type="checkbox"
                className="col-sm-2 form-check-input"
                checked={item.completed}
                onChange={onCheckItem}
            />
            <input defaultValue={item.content} className="col-sm-8 border-0 border-bottom"/>
            <Button onClick={onUpdateItem} className="col-sm-2 btn-primary">Update</Button>
        </li>
    )
}