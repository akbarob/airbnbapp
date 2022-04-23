
import './App.css';
import Cards from './Components/card';
import Header from './Components/header';
import Hero from './Components/hero';


function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Hero/>
        <Cards/>
      </div>
      
    </div>
    
    
  );
}

export default App;
