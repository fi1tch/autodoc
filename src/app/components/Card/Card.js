import React from "react";
import styled from "react-emotion"

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  align-items: center;
  font-size: 1vmax;
  margin: 5px;
  padding: 1em;
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
const Title = styled('p')`
  display: flex;
  font-family: Courier Cyrillic;

  text-align: center;
  font-size: 1.1em;
  color: #0074B3;
  justify-content: center;
  margin: 0;
`

const Card = ({src,title}) => (
  <Wrapper>
    <ImageBox> <Image src = {src} /> </ImageBox>
    <Title> {title} </Title>
  </Wrapper>
);

export default Card;
