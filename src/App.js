import React, { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/Button';


function App() {

  const [nombre, setNombre] = useState(null);
  const [password, setPassword] = useState(null);

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4>Login</h4>
        </div>
        <div className="card-body">
        <div className="row">
        <div className="col">
          <Input placeholder={'Nombre'} onChangeFuncion={onChangeNombre}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Input placeholder={'Contraseña'} type={'password'} onChangeFuncion={onChangePassword}/>
        </div>
      </div>
      <div className="row">
        <div class="col">
        { nombre && password === '252525' && <Button>Ingresar</Button> }
        </div>
      </div>
        </div>
      </div>

      {/*nombre && password === '252525' &&*/}
    </div>
  );
}

export default App;
