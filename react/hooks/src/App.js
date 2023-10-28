import logo from './logo.svg';
import './App.css';
import UseState from './hooks/state';
import UseRef from './hooks/ref';
function App() {
  return (
   <>
   <h1>useState</h1>
   <UseState/>
   <hr />
   <h1>useRef</h1>
   <UseRef />
   </>
  );
}

export default App;
