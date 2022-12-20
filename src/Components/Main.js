import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

function Main() {
    const [resize, setResize] = useState(false)
    const [show, setShow] = useState(false)
    const [hideArrow, setHideArrow] = useState(false)

    const handleClick = () => {
        setResize(true)
        setShow(true)
        setHideArrow(true)
    }
    const resizeGrayBox = () => {
        setResize(false)
        setShow(false)
        setHideArrow(false)
    }
  return (
    <MainContent>
        <p><em>SIDE WIDE ANNOUCEMENT MESSAGE!</em> - SALE / DISCOUNT <b>OFFER - <u>NEW PRODUCT HIGHLIGHT</u></b></p>
            <GrayBox style={{width : resize ? "100%" : ""}}>
                <img src='img/arrow.ico' alt="" onClick = {() => handleClick()} style={{display : hideArrow ? "none" : ""}}></img>
                <i style={{display : show ? "" : "none"}}><img src="img/cross.ico" alt="close" onClick={() => resizeGrayBox()} ></img></i>
                <ImageSection>
                <img
                    src='/img/cart.jpg'
                    alt = ""
                    style={{
                        width: '200px',
                        height: '200px',
                        transition: 'transform 0.2s',
                        transform: 'scale(1)',
                      }}
                      onMouseEnter={(event) => {
                        event.currentTarget.style.transform = 'scale(2)';
                      }}
                      onMouseLeave={(event) => {
                        event.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                </ImageSection>
            </GrayBox>

        
    </MainContent>
  )
}
const MainContent = styled.div`
height : 80vh;
position : relative;
margin-top : 60px;
display : flex;
justify-content : space-between;
flex-direction : column;
    p {
        font-size : 15px;
        text-align : center;
    }
    i {
        height : 90%;
        width : auto;
        z-index : 3;
    }
    
`;

const GrayBox = styled.div`
background-color : rgb(170, 163, 163);
height : 100%;
width : 60%;
top : 0;
display : flex;
justify-content : end;
align-items : center;
position: relative;
border-radius : 10px;
transition: width 200ms;

    img {
        cursor : pointer;
    }
    
`;
const ImageSection = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    img {
        width : 70%
        
    }
`;

    

export default Main
