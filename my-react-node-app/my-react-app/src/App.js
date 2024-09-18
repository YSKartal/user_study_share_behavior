import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListGroup from './ListGruoup';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ContentView  from './PostEval';

function App() {
  const [data, setData] = useState('');
  const queryParameters = new URLSearchParams(window.location.search)
  const order = queryParameters.get("order")

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  useEffect(() => {
    axios.post('http://localhost:3001/register/', {
      fname: 'Finn',
      lastName: 'Williams'
    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }, []);





  return (
    <div className="App">
      <div>
        <ContentView order={order}/>
      </div>
      <p>server connection: {data} for {order}</p>
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