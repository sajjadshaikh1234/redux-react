import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {
  return (
    <div className="App">
     {/* <h1>hellox</h1> */}
     <Users data={{name:"sajjad" , age:"23"}} />
    </div>
  );
}

export default App;
