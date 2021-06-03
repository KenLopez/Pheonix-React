import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Footer from './components/Footer';
import CatProveedor from './components/CatProveedor';
import CatBodega from './components/CatBodega';
import CatProductos from './components/CatProductos';
import AddProducto from './components/AddProducto';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route exact path="/Catalogo">
          <Redirect to="/Catalogo/Productos" />
        </Route>
        <Route path="/Login" component={Login}/>
        <Route path="/Catalogo/Proveedores" component={CatProveedor}/>
        <Route path="/Catalogo/Bodegas" component={CatBodega}/>
        <Route path="/Catalogo/Productos" component={CatProductos}/>
        <Route path="/NuevoProducto" component={AddProducto}/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
