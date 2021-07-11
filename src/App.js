import logo from './logo.svg';
import './App.css';
import img from './image/test1.png'

function App() {


  var name= "Priyanka"; 
  var a,b,sum;
  a=10;
  b=20;
  sum=a+b;

  const openSum=()=>{

    console.log("Hello Vaibhav",name,sum)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Welcome to this page.
        </p>
        <button onClick={openSum} >Click here</button>
        <p>{name}</p>
        <h1>{a}+{b}={sum}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
