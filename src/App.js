import logo from './logo.svg';
import './App.css';
import CardContaniner from './components/CardContaniner';

function App() {
  return (
    <div className="App">
      <CardContaniner numOfCards={5} />
    </div>
  );
}

export default App;
