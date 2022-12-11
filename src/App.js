import './App.css';

import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link, Navigate} from "react-router-dom";
import TestRoute from './Components/TestRoute';
import LoginSignupPage from './Components/LoginSignupPage';
import LoginPage from './Components/LoginPage';
import RegError from './Components/RegError';
import LoginError from './Components/LoginError';
import UserSignup from './Components/UserInput';
import Dashboard from './Components/Dashboard';




function App() {
  return (
    
    <div className="App">
     
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<LoginSignupPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path ='/registrationerror' element={<RegError />} />
              <Route path ='/loginerror' element={<LoginError />} />
              <Route path='/signup' element={<UserSignup />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/test' element={<TestRoute />} />
              
            </Routes>
        </BrowserRouter>
    </div>
    
    
  );
}

export default App;
