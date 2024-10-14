import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import ContentView  from './PostEval';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setData] = useState('');
  const queryParameters = new URLSearchParams(window.location.search)
  const order = queryParameters.get("order")
  const caseToken = queryParameters.get("caseToken")
  const uid = uuidv4()

  console.log(process.env.REACT_APP_NODE_URL_R)

  /* useEffect(() => {
    axios.get(process.env.REACT_APP_NODE_URL_A)
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); */


  /* useEffect(() => {
    axios.post(process.env.REACT_APP_NODE_URL_R, {
      fname: 'Finn',
      lastName: 'Williams'
    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }, []); */





  return (
    <div className="App">
      <div>
        <ContentView order={order} uid={uid} ct={caseToken}/>
      </div>
      
    </div>
  );
}

export default App;


function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    axios.post('http://localhost:3001/register/', {
      fname: 'fgfgbf',
      lastName: 'Williams'
    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


function MyButton2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    axios.post('http://localhost:3001/register/', {
      fname: '2eregtr',
      lastName: 'Williams'
    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}