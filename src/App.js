import React,{ useState  } from 'react';
import { useEffect } from "react";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import { Home, Landing, Login, Register } from "C:/Users/LEGION/Desktop/wesense authentication/client/src";
import './App.css';

function App() {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/"
         element={user?.email ? <Navigate to="/home" /> : <Landing />}/>

      <Route
      path="/Register"
      element={user?.email ? <Navigate to="/home" /> : <Register/>}
      />
      <Route
        path="/login"
        element={user?.email ? <Navigate to="/home" /> : <Login />}
      />
          <Route
              path="/home"
              element={user?.email ? <Home user={user} /> : <Navigate to="/" />}
           />
           </Routes>
    </BrowserRouter>
  );
};

export default App;
