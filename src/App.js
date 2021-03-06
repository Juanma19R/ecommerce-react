import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Componentes
import { CartContextProvider } from './context/CartContext'
import NavBar from './layout/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './layout/Footer/Footer'

//Paginas
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ContactPage from './pages/ContactPage'
import DetailPage from './pages/DetailPage'
import Cart from './pages/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/category" element={<CategoryPage />}/>
            <Route path="/category/:category" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<DetailPage />}/>
            <Route path="/contacto" element={<ContactPage />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
          <Footer />
          </CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;