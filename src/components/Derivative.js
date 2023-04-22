import { derivative } from 'mathjs';
import { useState } from 'react';

function Derivative() {
  const [value, setValue] = useState('x^2');
  const [variable, setVariable] = useState('x');

  const handleSubmit = () => {
    setValue(derivative(value, variable).toString());
  }

  return (
    <div>
      <h1>Derivatives!</h1>
      <label htmlFor="expression">Expression</label>
      <input type="text" name="expression" value={value} onChange={e => setValue(e.target.value)} />
      <label htmlFor="variable">Variable</label>
      <input type="text" name="variable" value={variable} onChange={e => setVariable(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <p>{value}</p>
    </div>
  );
}

export default Derivative;