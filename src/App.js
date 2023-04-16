import Home from './frontend/admin/Login/Home'
import AdminLogin from './frontend/admin/Login/AdminLogin';
import SignUp from './frontend/admin/Login/SignUp';
import UserInterface from './frontend/Interface/UserInterface';
import './App.css';
import AdminLogins from './frontend/admin/Dashboard/AdminLogin';
import Dashboard from './frontend/admin/Dashboard/Dashboard';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home/>} path="/" />
          {/* <Route element={<Login/>} path="/login" /> */}
          <Route element={<AdminLogin/>} path="/adminlogin" />
          <Route element={<SignUp/>} path="/signup" />
          <Route element={<Dashboard/>} path="/dashboard/*" />
          <Route element={<UserInterface/>} path="/userinterface/*" />
          <Route element={<AdminLogins/>} path="/admin" />
        </Routes>
      </Router>

  
    </div>
  );
}

export default App;
