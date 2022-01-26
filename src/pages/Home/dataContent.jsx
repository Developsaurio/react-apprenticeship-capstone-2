import React from 'react';
import styled from 'styled-components';
import Calendar from '../../components/Calendar';
 
const Title = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    background: rgb(12,3,25);
    box-shadow: 5px 5px 15px 5px #090113c9;    
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    z-index: 3000;
`; 

const Grid = styled.div`
    width: 90%;
    height: 60%;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 30px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-items: center;
    column-gap: 20px;
    background: #1e062e;

    @media (max-width: 1329px) {
        grid-template-columns: 100%;
        margin-top: 140px;
        margin-bottom: 100px;
        column-gap: 0px;
    }

    @media (max-width: 400px) {
        width: 100%;
        padding: 0px;
    }

`;
const TextContainer = styled.div`
    width: 300px;
    text-align: left;
    color: #fff;
    line-height: 1.3rem;
    font-weight: 300;
    
    @media (max-width: 1329px) {
        margin-bottom: 60px;
        width: 90%;
    }
    @media (max-width: 400px) {
        width: 80%;
    }
`;
const CalendarContainer = styled.div`
    width: 300px;
    text-align: center;
    
    @media (max-width: 1329px) {
        margin-top: 60px;
    }
`;
const ImgVideoContainer = styled.div`
    border-radius: 30px;
    background-color: #916fc8ac;
    padding: 12px;
    text-align: center;
    
    @media (max-width: 1329px) {
        width: 90%;
        margin: 0 auto;
        margin-top: 60px;
    }
    @media (max-width: 400px) {
        width: 90%;
    }
    
    img, iframe{
        height: 400px;
        margin: o auto;
        
        @media (max-width: 700px) {
            width: 90%;
            height: auto;
        }
    } 
`;

const DataContent = ({isLoading, data, selected, setDate}) => (
      <>
      <Title>Pick of the day</Title>

     <Grid>
         <CalendarContainer>
            <Calendar 
            selectedDay={selected} 
            setSelectedDay={setDate}
            loading={isLoading}
            />
        </CalendarContainer>

        <ImgVideoContainer>
            <h2>{data.title}</h2>
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
            <h3>{selected}</h3>
        </ImgVideoContainer>

        <TextContainer>
            <h5>{data.explanation}</h5>
        </TextContainer>
     </Grid>
     </>
);
export default DataContent;
