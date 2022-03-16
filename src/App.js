import './scss/App.scss';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.scss'
import './components/ItemListContainer/ItemListContainer'
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