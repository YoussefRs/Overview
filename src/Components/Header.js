import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
    <Container>
        <Logo>
            <img src='/img/cheese.ico' alt="logo"></img>
            <h1>Machengo</h1>
        </Logo>
        <NavItems>
            <input type="text" placeholder = "enter product id.."></input>
            <img src='/img/search.ico' alt='search'></img>
            <img src='/img/dark-mode.png' alt="dark-mode"></img>
        </NavItems>
    </Container>
  )
}
const Container = styled.div`
position : fixed;
top : 0;
left : 0;
right : 0;
height : 70px;
background-color : rgb(54, 34, 34);
display : flex;
justify-content : space-between;
align-items : center;
padding : 0 36px;
border-radius : 10px;
`
const Logo = styled.a`
display : flex;
align-items : center;
    h1 {
        padding-left : 5px;
        color : white;
    }

`
const NavItems = styled.div`
display : flex;
justify-content : center;
align-items : center;
    input {
        border-radius : 10px;
        height : 20px;
        margin-right : 20px;
    }
    img {
        width : 15px;
        margin-right : 20px;
    }
`;
export default Header
