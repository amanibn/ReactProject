import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
       <p className="test"></p>
        <input type="text" />
        <Membre nom='Ilyes'/>
        <Membre nom='Aymen'/>
        <Membre nom='Amani'/>
        <Membre nom='Oumayma'/>
        <Membre nom='Oussama'/>

      </header>
    </div>
  );
}

export default App;
