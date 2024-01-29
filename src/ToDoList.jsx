
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDoList = (props) => {
  return (
    <div className="flex items-center py-1">
      <FontAwesomeIcon
        icon={faTrash}
        className="text-black hover:text-red-700 cursor-pointer mr-2"
        onClick={() => {
          props.onSelect(props.id);
        }}
      />
      <li className="transition ease-in-out duration-300 uppercase ">{props.text}</li>
    </div>
  );
};

export default ToDoList;
