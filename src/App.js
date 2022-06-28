import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import RequireAuth from './components/RequereAuth';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
     </Routes>
    </div>
  );
}

export default App;
