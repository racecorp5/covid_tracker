import React, { useState, useEffect } from 'react';
import axios from 'axios';
import USAMap from "react-usa-map";
import StateData from './StateData';
import logo from './logo.svg';
import './App.css';

const api = 'https://api.covidtracking.com/v1/states/current.json';

function App(props) {
  const [covidData, setCovidData] = useState([]);
  const [selectedState, setSelectedState] = useState({});
  const mapRef = React.createRef();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(api);
        setCovidData(data, []);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    }
    fetchData();
  }, []);

  const mapHandler = event => {
    //Get state name from module
    const { name } = event.target.dataset;

    //Remove all selected classes
    const els = document.getElementsByClassName('selected');
    [].forEach.call(els, function (el) {
      el.classList.remove('selected');
    });

    // Add selected class to clicked state
    event.target.classList.add('selected');

    const data = covidData.find(element => {
      return element.state === name;
    });
    setSelectedState(data, {});
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <table>
          <tbody>
            <tr>
              <td ref={mapRef} >
                <USAMap onClick={mapHandler} />
              </td>
              <td>
                <StateData
                  data={selectedState}
                ></StateData>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
