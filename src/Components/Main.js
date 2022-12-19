import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

function Main() {
    const [resize, setResize] = useState(false)
    const handleClick = () => {
        setResize(true)
    }
  return (
    <MainContent>
        <p><em>SIDE WIDE ANNOUCEMENT MESSAGE!</em> - SALE / DISCOUNT <b>OFFER - <u>NEW PRODUCT HIGHLIGHT</u></b></p>
        <i><img src="img/cross.ico" alt="close"></img></i>
        <GrayBox style={{width : resize ? "100%" : ""}}>
            <img src='img/arrow.ico' alt="" onClick = {() => handleClick()}></img>
            
        </GrayBox>

    </MainContent>
  )
}
const MainContent = styled.div`
height : 80vh;
position : relative;
margin-top : 60px;
display : flex;
flex-direction : column;
    p {
        font-size : 15px;
        text-align : center;
    }
    
`;
const GrayBox = styled.div`
background-color : rgb(170, 163, 163);
height : 100%;
width : 60%;
position : aboslute;
top : 0;
display : flex;
align-items : center;
justify-content : center;
border-radius : 10px;
transition: width 200ms;
    img {
        padding-left : 80%;
    }
    
`;
export default Main
