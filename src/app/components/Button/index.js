import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

const ButtonBox = styled("div")`
  display: flex;
  background: #62AFD9; 
  border: none;
  border-radius: 0px;
  margin: 20px;
  transition: all 0.5s ease-out;

  :hover {
    background-color: #62afd9ad;
    transition: all 0.2s ease-out;
  }

`

const Content = styled("span")`
  font-size: 26px;
  font-family: Courier Cyrillic;
  margin: 15px 48px;
  cursor: pointer;
`

const Button = (prop) => {

  return (
    <Link to={prop.link} style={{ textDecoration: 'none', color: 'white' }}>
      <ButtonBox>
        <Content> {prop.text} </Content>
      </ButtonBox>
    </Link>
  )
}

export default Button