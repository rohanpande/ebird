import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';


class Observations extends Component {

  constructor(props) {
    super(props);
  }

  renderMap(locationData){

    const{lat,lon} = locationData.city.coord;
    console.log(lat);
    console.log(lon);
    return (
      <td key={locationData.city.name} >
        <GoogleMap lon={lon} lat={lat}/>
      </td>
    );
  }

  render(){
    const lon = 42.46;
    const lat = 76.51;

    return(
      <table className="table table-hover">
          <thead>
            <tr>
              <th>  <h2>Google Map</h2> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
                {this.props.location.map(this.renderMap)}
            </tr>
          </tbody>
          </table>
    );
  }

}

function mapStateToProps({location}) {
  return { location };
}

export default connect(mapStateToProps)(Observations);