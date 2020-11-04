import React from 'react';
import '../styles/App.css';

function App() {

  return (
    <div className="container">
      <div className="buttonLeft">
        <h1 >Create Account</h1>
        <button className="buttonSignup">Cadastro</button>
      </div>
      <div className="cardLogin">
        <h1 className="titleLogin">Login</h1>
        <input className="inputLogin" type="text" placeholder="Email" name="email" required></input>
        <input className="inputLogin" type="password" placeholder="Password" name="pass" required></input>
        <button className="buttonLogin">Login</button>
      </div>
    </div>
  );
}

export default App;
