import './App.css'
import Shoe from './assets/shoe.png'
import shop from './assets/shop.png'
import Nav from './Navigation.jsx'

function App() {

  return (
    
    <div>
      <Nav/>
      <header className="head">

        <div className="left-intro">

          <h1>Your feet deserves the best</h1>
          <p>Your feet deserves the best and we are here to help you with our shoes. Your feet deserves the best and we are here to help you with our shoes </p>
          <button className='btn-1 btn'> Shop now</button>
          <button className="btn-2 btn">Category</button>
        </div>
         <img className="shop" src={shop} alt="" />

          <div className="right-intro">
            <img src={Shoe} alt="Shoe picture" />
          </div>
          </header>
      </div>
  );
}
export default App
