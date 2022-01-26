import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    background-color: rebeccapurple;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 100vh;
    padding: 0 20px;
    width: 100%;

    p{
        width: 80%;
    }
`;

const DataError = ({error, message}) =>(
    <Container>
        ERROR: {error}
        <br/>
        <p>{message}</p>
        <br/>
        <br/>
        <Link to="/">Go Home</Link>
    </Container>
);
export default DataError;
