// import { useState } from 'react';
import './App.css';
import Form from './components/form';
// import ToDoInput from './components/to-do';
// import ToDoList from './components/to-do-list';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
function App() {
  // const [array, setArray] = useState([])

  return (
    <div className="container">

      <Router>
        <Routes>
          <Route path="/form" element={<Form />} />
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
