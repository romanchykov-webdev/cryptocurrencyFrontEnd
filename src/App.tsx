import React from 'react';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponents from './components/auth';

function App() {
  return (
    <div className="App">


      <Routes>

        {/*solo registration user*/}
        <Route element={<PrivateRoute />} >
          <Route path="/" element={<Home />} />
        </Route>

        {/*all users open routing*/}
        <Route path="login" element={<AuthRootComponents />} />
        <Route path="register" element={<AuthRootComponents />} />

      </Routes>
    </div>
  );
}

export default App;
