import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Jumbo from './components/jumbosection/jumbo';
import Feature from './components/feature/feature';
import Resturant from './components/resturantsection/resturant';
import Footer from './components/footer/footer';





function App() {
        return(
          <div>
          <Jumbo />
          <Feature />
          <Resturant />
          <Footer />
          </div>
        )
}
export default App;

