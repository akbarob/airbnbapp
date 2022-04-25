
import './App.css';
import Cards from './Components/card';
import Contacts from './Components/Contact';
import Header from './Components/header';
import Hero from './Components/hero';


function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Hero/>
        <Cards/>
        <div className='row'>
          <Contacts
            img={require('./images/cat 1.jpg')}
            name="Mr WHizkitson"
            phoneno='(212) 555-1234'
            email="mr.whizkitson@meow.com"
          />
          <Contacts
          img={require('./images/reing.jpg')}
          name="Mr Fluffykit"
          phoneno='(212) 555-7334'
          email="mr.fluffykit@meow.com"
          />
          <Contacts
          img={require("./images/cattycat.jpg")}
          name="Mr Reign"
          phoneno='(212) 555-2354'
          email="mr.reigncat@meow.com"
          
          />
          <Contacts
            img={require('./images/garf.jpg')}
            name="Mr Cattycat"
            phoneno='(212) 555-9291'
            email="mr.cattykat@meow.com"
          />

        </div>
        
      </div>
      
    </div>
    
    
  );
}

export default App;
