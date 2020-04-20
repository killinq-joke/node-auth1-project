import React, {useState} from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({})
  return (
    <div className="App">
      <form>
        <label>
          username
          <input value={formValues.username} />
        </label>
        <label>
          password
          <input type="password" value={formValues.password} />
        </label>
      </form>
    </div>
  );
}

export default App;
