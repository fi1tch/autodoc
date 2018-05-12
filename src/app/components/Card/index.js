import React from "react";
import styled from "react-emotion"

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.2vmax;
  background-color: white;
  
  margin: 5px;
  padding: 1em;
  width: 20%;
`
const ImageBox = styled('div')`
  display: flex;
  justify-content: center;

  margin:5px;
`

const Image = styled('img')`
  width: 7em;
  height: 7em;
`
const Title = styled('h3')`
  display: flex;
  justify-content: center;

  text-align: center;
  font-size: 1.1em;
  color: #0074B3;
  margin: 40px 0 0 0;
`

const Card = ({src,title}) => (
  <Wrapper>
    <ImageBox> <Image src = {src} /> </ImageBox>
    <Title> {title} </Title>
  </Wrapper>
);

export default Card;
