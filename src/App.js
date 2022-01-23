import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
const NASA_URL= 'https://api.nasa.gov/planetary/apod';
const KEY = 'p6pWJpQEPAfcfezyNmh4Ru5Bt9onXU4Fb42QXAWa';


const App = () => {
  const [data, setData] = useState();

  const url = `${NASA_URL}?api_key=${KEY}`;

  useEffect(() => {      
    fetch(url).then((res)=> res.json()).then((items) =>  setData(items));    
  }, []);

  !!data && console.log('DATa', data)
  return (
    <div>
     { !!data ?  
     <>
      <h2>{!!data && data.title}</h2>
      <h3>{!!data && data.date}</h3>
      <h5>{!!data && data.explanation}</h5>
      {!!data && data.media_type === "image" &&  <img src={data.url} alt={data.title}/>}
      {!!data && data.media_type === "video" &&  
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
