
import './App.css';

import { Switch, Route,   BrowserRouter as Router,
} from "react-router-dom";
import Header from './Header';
import Banner from './Banner';
import ShopCatagory from './ShopCatagory/ShopCatagory';
import Shop from './ShopCatagory/Shop/Shop';
import Counter from './Counter/Counter';
import Market from './Market';
import Review from './Review/Review';
import Club from './Club/Club';
import SimpleBlog from './SimpleBlog/SimpleBlog';
import ContactInfo from './ContactInfo/ContactInfo';
import Sponsor from './Sponsor/Sponsor';
import Footer from './Footer/Footer';
import Signup from './signup/index';
import Contact from './Contract';
import ContactFooter from './ContactFooter';
import About from './About';




function App() {
  return (
    <>

<Router>

      
     <Switch>

     <Route exact path='/' >
           <Header/>
           <Banner/>
           <ShopCatagory/>
           <Market/>
           <Counter/>
           <Review/>
           <Club/>
           <SimpleBlog/>
           <ContactInfo/>
           <Sponsor/>
           <About/>
           <Footer/>
          </Route>
          <Route path='/shop/:id'>    
            <Header/>
            <Shop/>
            <Footer/>
          </Route>
          <Route path='/myShop'> 
          <Header/>   
          <ShopCatagory/>
          <Footer/>
           
            </Route>
            <Route path='/signIn'>
              <Header/>
             <Signup/>
            </Route>
            <Route path='/contact'>
              <Header/>
             <Contact/>
            <ContactFooter/>
            </Route>
            </Switch>
   
    </Router>



    

  
    </>
  );
}

export default App;



