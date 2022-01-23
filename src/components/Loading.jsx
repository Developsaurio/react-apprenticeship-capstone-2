import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #d6bbf1;
    color: rebeccapurple;
`;

const Loading = () => (
<Container>
    <progress>LOADING...</progress>
</Container>
  );

export default Loading;