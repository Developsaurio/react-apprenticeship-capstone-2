import React from 'react';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import DataError from './dataError';
import DataContent from './dataContent';

const Layout = styled.div`
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: linear-gradient(360deg, #916fc8ac 0%, #111011b7 50%, #090016 100%);
`; 
const Home = ({isLoading, data, selected, setDate}) => (
    <Layout>
    {!!isLoading ? <Loading /> : 
       (!!data.code ? <DataError error={data.code} message={data.msg}/> 
        : <DataContent 
            isLoading={isLoading} 
            data={data} 
            selected={selected} 
            setDate={setDate}
          />
    )}
    </Layout>
);
export default Home;
