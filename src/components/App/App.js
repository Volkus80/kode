import { useState, useEffect, createContext, useCallback } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Main from '../Pages/Main';
import UserPage from '../Pages/UserPage';

export const AppContext = createContext('AppContext');

export default function App() {
  const [data, setData] = useState([]);
  const [radio, setRadio] = useState('1');
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const changeRadio = useCallback(e => setRadio(e.target.value), []);

  const sortArr = useCallback(function(arr) {
    if (radio === '1') {
      return arr.sort((prev, next) => prev.firstName < next.firstName ? -1 : 1);
    } else {
      return arr.sort((prev, next) => prev.sortDate - next.sortDate);
    }
  }, [radio]);

function makeDate(str) {
  const arr = str.split('-');
  const date = new Date(new Date().getFullYear(), arr[1]-1, arr[2]);
  if (date > new Date()) {
      return date;
  } else {
      return new Date(new Date().getFullYear()+1, arr[1]-1, arr[2]);
  }	
}

    useEffect(() => {
      
      function addParam(arr) {
        return arr.map(function(elem) {
          return {...elem, sortDate: makeDate(elem.birthday)}
        });
      }
      axios.get("https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all")
      .then(function(res) { 
        setLoading(false);
        return res.data.items;
      })
      .then(res => addParam(res))
      .then(res => sortArr(res))
      .then(res => setData(res))
      .catch(function(err) {
        setLoading(false);
        setErr(true);
        console.error(err)})},[radio, sortArr]);
  
    const value = {
      data,
      radio,
      changeRadio,
      loading,
      err
    };

  return (
    <AppContext.Provider value = {value}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main/:id' element={<UserPage data={data}/>} />
      </Routes>
    </AppContext.Provider>
  )
} 
