import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home-page';
import ToDoList from './components/pages/to-do-page/to-do-list-page';
import Form from './components/pages/form-page/form-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/to-do" element={<ToDoList />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
