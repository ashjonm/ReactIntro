import React from "react";
import "./App.css";
import Flat from "./components/flat";
import GoogleMapReact from "google-map-react";
import Marker from "./components/marker";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFlats:[],
      flats: [],
      selectedFlat: null,
      search: ""
    };
  }

  componentDidMount () {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          allFlats: data
        })
      })
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });

    console.log(flat);
  };

  handleInput = event => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    });
  };

  render () {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };

    let zoom = 12;
    
    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      };
      
      zoom = 15;
    }  

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Search." value={this.state.search} onChange={this.handleInput} />
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
                return <Flat key={flat.name} flat={flat} selectFlat={this.selectFlat} isSelected={this.state.selectedFlat && flat.name === this.state.selectedFlat.name} />
            })};
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCKPR-JZgIRxhZBfoDy1cM4M65Z6NsGKcQ"}}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
          >
            {this.state.flats.map((flat) => {
              return <Marker key={flat.name} lat={flat.lat} lng={flat.lng} price={flat.price} isSelected={this.state.selectedFlat && flat.name === this.state.selectedFlat.name} />
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  };
}

export default App;
