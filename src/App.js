import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import Loading from './components/Loading';
import useFormat from './resources/date';
import { format } from "date-fns";

const NASA_URL= 'https://api.nasa.gov/planetary/apod';
const KEY = 'p6pWJpQEPAfcfezyNmh4Ru5Bt9onXU4Fb42QXAWa';

const App = () => {
  const [data, setData] = useState({});
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  let selected = useFormat(date);
  
  let url = `${NASA_URL}?api_key=${KEY}&date=${selected}`;

  useEffect(() => {      
    fetch(url).then((res)=> res.json()).then((imageData) =>  setData(imageData));    
  }, [url]);

  return (
    <div>
     { !!data ?  
     <>
        <Calendar 
        selectedDay={selected} 
        setSelectedDay={setDate}
        />

      <h2>{data.title}</h2>
      <h3>{selected}</h3>
      <h5>{data.explanation}</h5>
      {data.media_type === "image" &&  <img src={data.url} alt={data.title}/>}
      {data.media_type === "video" &&  
                  <iframe 
                  src={data.url}
                  title={data.title}
                  frameBorder="0" 
                  allow="accelerometer; 
                          autoplay; 
                          clipboard-write; 
                          encrypted-media; 
                          gyroscope; 
                          picture-in-picture" 
                  allowFullScreen
                  />
        }
     </>
     : <Loading />
     }
    </div>
  );
}

export default App;
