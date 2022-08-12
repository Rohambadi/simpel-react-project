import React from 'react';
import './App.css';

function App() {

    return (
        <div className="login">
            <div className="login-screen">
                <div className="app-title">
                    <h1>Login</h1>
                </div>
                <div className="login-form">
                   <div className="group-control">
                       <input type="text" className="login-field" placeholder="username"/>
                   </div>

                   <div className="group-control">
                       <input type="text" className="login-field" placeholder="password"/>
                   </div>

                   <div className="group-control">
                       <input type="submit" className="login-btn" value="login"/>
                   </div>
                   
                </div>
            </div>
            






        </div>
        

      
  );
}

export default App;
