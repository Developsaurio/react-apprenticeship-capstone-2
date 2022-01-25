import React, { useState, useEffect } from 'react';
import useFormat from './resources/date';
import { format } from "date-fns";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';

const NASA_URL= 'https://api.nasa.gov/planetary/apod';
const KEY = 'p6pWJpQEPAfcfezyNmh4Ru5Bt9onXU4Fb42QXAWa';

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const initialDate = format(new Date(), 'yyyy-MM-dd');
  const [date, setDate] = useState(initialDate);
  let selected = useFormat(date);
  
  let url = `${NASA_URL}?api_key=${KEY}&date=${selected}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const dataImg = await response.json();
        return setData(dataImg);
      } catch {
        console.log(e =>{ throw new Error(e) });
      }
    };
    fetchData();
    setIsLoading(false);
  }, [selected]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Home 
          data={data} 
          isLoading={isLoading} 
          selected={selected} 
          setDate={setDate} 
          />
          }
        />
        <Route path='/404' component={<Error />} />
        <Route path='*' to='/404' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
