import logo from './logo.svg';
import './App.css';

const api = async () => {
  await fetch('http://api:5000').then((response) => {
    console.log(response.json())
  });
}

function App() {
  return (
    <div>
      <h3>ambiente main</h3>
      <button type='button' onClick={api}>api </button>
    </div>
  );
}

export default App;
