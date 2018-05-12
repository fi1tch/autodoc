import React from "react";
import styled from 'react-emotion'
import Card from "../Card";

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-around;
`

const CardGroup = props => {
  const CardItem = props.arr.map(item => (
    <Card
      key={item.id}
      src={item.img}
      title={item.text}
    />
  ))

  return (
    <Wrapper> 
      { CardItem }
    </Wrapper>
  )
}

export default CardGroup