// import { useState } from 'react';
import './App.css';
import Form from './components/form-page';
// import ToDoInput from './components/to-do';
import ToDoList from './components/to-do-list-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home-page';
function App() {
  // const [array, setArray] = useState([])

  return (
    <div className="container">

      <Router>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/to-do" element={<ToDoList />} />
          <Route path="/*" element={
            <Home />
          } />

          {/* <ToDoInput array = {array} setArray = {setArray} />
              <ToDoList array = {array} /> */}
        </Routes>
      </Router>


    </div>
  );
}

export default App;
