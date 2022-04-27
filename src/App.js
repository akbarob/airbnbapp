
import './App.css';
import Cards from './Components/card';
import Contacts from './Components/Contact';
import Header from './Components/header';
import Hero from './Components/hero';
import CardsData from './Components/CardsData';
import CatData from './Components/CatData';


function App() {
  const CardsElement = CardsData.map(shef=>{
    return <Cards
    key={shef.id}
    img= {shef.img}
    rating= {shef.rating}
    reviewCount= {shef.reviewCount}
    location={shef.location}
    title= {shef.title}
    price= {shef.price}
    badge= {shef.badge}
    openSpots={shef.openSpots}
    />

  })

  const catsContact = CatData.map(cat=>{
    return <Contacts
    
    key={cat.id}
    img={cat.img}
    name={cat.name}
    phoneno={cat.phoneno}
    email={cat.email}

    className=""/>
  })
  return (
    <div>
      <Header/>
      <div className='container'>
        <Hero/>
        <div className='row'>
          {CardsElement}
        
        </div>
        
        <div className='row'>
          {catsContact}

        </div>
        
      </div>
      
    </div>
    
    
  );
}

export default App;
