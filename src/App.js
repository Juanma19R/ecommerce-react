import './App.scss';
import NavBar from './layout/NavBar/NavBar';
import './layout/NavBar/NavBar.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;