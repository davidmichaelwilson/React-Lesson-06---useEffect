import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [stateName, setStateName] = useState("USA")
  const [cityName, setCityName] = useState("Anytown")

  // ****** use useEffect to make an api call to
  // https://freegeoip.app/json/ whose response
  // you will use to update the cityName and 
  // stateName variables. The API call should
  // be made only once.


  

  return (
    <main>
      <h1>(Hi there/Howdy)</h1>
      <p>How's life in {cityName}, {stateName}?</p>
    </main>
  );
}

export default App;