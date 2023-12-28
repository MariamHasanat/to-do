// import { useState } from 'react';
import './App.css';
import Form from './components/form';
// import ToDoInput from './components/to-do';
// import ToDoList from './components/to-do-list';

function App() {
  // const [array, setArray] = useState([])
  return (
    <div className="container">

      <Form />

      {/* <ToDoInput array = {array} setArray = {setArray} />
     <ToDoList array = {array} /> */}
    </div>
  );
}

export default App;
