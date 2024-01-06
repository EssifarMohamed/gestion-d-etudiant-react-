import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateUser from "./components/CreateUser";
import ListUser from "./components/ListUser";

function App() {
  return (
    <div className="App">
      <h3>GESTION D'ETUDIANTS</h3> 
     
      <BrowserRouter>
       <nav>
       <ul>
          <li>
            <Link to="/">List Etudiant</Link>
          </li>
          <li>
            <Link to="user/create">Add Etudiant</Link>
          </li>
         
        </ul>
       </nav>
       <Routes>
        <Route index element={<ListUser/>}/>
        <Route path="user/create" element={<CreateUser/>}/>
       </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;