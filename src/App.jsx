import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(""); // Clear input field after adding
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h1 className="text-xl md:text-2xl font-bold text-gray-700 mb-3">ToDo List</h1>
        <div className="flex flex-col md:flex-row">
          <input 
            type="text" 
            placeholder="Add Items" 
            value={inputList}
            onChange={itemEvent}
            className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2 flex-grow"
          />
          <button 
            onClick={listOfItems} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            +
          </button>
        </div>
        <ol className="mt-3">
          {Items.map((itemVal, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
export default App;

