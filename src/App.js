import { useEffect, useState } from 'react';
import './App.css';
import fakeData from './FakeData/Data.json';
import Container from './Components/Container/Container';
import Cart from './Components/Cart/Cart';
function App() {
  const [friends, setFriends] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setFriends(fakeData);
  },[]);
  const handleAddToCart = (friends) => {
    const newCart = [...cart, friends];
    setCart(newCart);
  }
  return (
    <div className="App">
    <h1>Team of Friend's</h1>
      <div style={{display: 'flex'}}>
        <div style={{width: '70%'}}>
          {
            friends.map(friend => <Container friends={friend} key={friend.id} handleAddToCart={handleAddToCart}></Container>)
          }
        </div>
        <div style={{marginLeft: "20px"}}>
            <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
