import React from "react";
import './App.css';
import Flat from './components/flat'

class App extends React.Component {
  render () {
    const testFlat = {
      name: "Hipster Highrises!",
      imageUrl: "https://www.homeanddecor.com.sg/sites/default/files/blog/2017/02/57474-2-5-did-not-buy-flat.jpg",
      price: "1455",
      priceCurrency: "USD",
      lat: 48.885707,
      lng: 2.343543
    };
  
    const flats = [ testFlat, testFlat, testFlat, testFlat, testFlat, testFlat ]; 

    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
            {flats.map((flat) => {
                return <Flat flat={flat} />
            })};
          </div>
        </div>
        <div className="map"></div>
      </div>
    );
  };
}

export default App;
