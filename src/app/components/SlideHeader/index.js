import React from 'react';
import styled from 'react-emotion';

import Button from '../Button'

const Wrapper = styled("div")`
    display:flex;
    flex-direction: column;
    justify-content: center;
    font-family: Courier Cyrillic;
    align-items: center;
    background: #F2F2F2;
    font-size: 0.9em;
`

const TitleSlide = styled("h2")`
    font-size: 2.7em;
    font-family: Courier Cyrillic;
    font-weight: normal;
    text-align: center;
    color: #004C74;
`

const SlideHeader= () => (
    <Wrapper>
        <TitleSlide> Мы делаем рутинную работу за Вас </TitleSlide>
        <Button link="/generating" text="Генерировать" />
    </Wrapper>
);

export default SlideHeader;
