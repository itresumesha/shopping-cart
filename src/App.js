import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
function App() {

  const { products }  = data;

  const [cartItems,setCartItems] = useState([]);

  // add
  const onAdd = (product) => {
  const exist =cartItems.find(x => x.id === product.id)
    if(exist)
    {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty:exist.qty+1}: x ));
    }
    else
    {
      setCartItems([...cartItems,{...product,qty:1}]);
    }
  }

//remove
  const onRemove = (product) => {
    const exist =cartItems.find(x=>x.id===product.id)
    if(exist.qty===1)
    {
      setCartItems(cartItems.filter(x=>x.id !== product.id));      
    }
    else
    {
      setCartItems(cartItems.map(x=>x.id===product.id ? {...exist, qty:exist.qty-1}:x ) );
    }
  }
  return (
    <div className="App">
       <Header/>
       <div className='row'>
        <Main products={products} onAdd={onAdd} onRemove={onRemove}/>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
       </div>
    </div>
  );
}

export default App;
