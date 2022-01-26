import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    background-color: rebeccapurple;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 100vh;
    padding: 0 20px;
    flex-direction: column;
`;

const Error = () => (
    <Container>
   This page don't Exist, try again
   <br/>
   <br/>
   <Link to="/">Go Home</Link>
    </Container>
);
export default Error;
