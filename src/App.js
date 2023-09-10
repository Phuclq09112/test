import './App.css';
import React, { useEffect } from 'react';
import { getDataFromContract } from '../src/Contract';
import { setContractData, getContractData } from '../src/Data';

function App() {
 useEffect(() => {
  async function fetchData() {
   const data = await getDataFromContract();
   setContractData(data);
  }
  fetchData();
 }, []);
 return (
  <div className="App">
   <h1>Contract Data</h1>
   <p>{getContractData()}</p>
  </div>
 );
}

export default App;
