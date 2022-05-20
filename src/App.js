import logo from './logo.svg';
import './App.css';
import './test.css';
import NavBar from './componentes/navbar/navbar'
import Card from './componentes/Card/Card';
import CardClass from './componentes/Card/CardClass';

// import { dateFormat } from './componentes/navbar/navbar'

function App() {
  

  const test2 = () => console.log("algo")
  return (
    //JSX
    <div className="App" >
      <NavBar />
      <Card />
      <CardClass />
    </div>
  );
}

export default App;
