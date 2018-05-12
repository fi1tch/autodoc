import React from 'react'
import styled from 'react-emotion'
import '../styles/cta-buttons.css'
import CardGroup from '../components/CardGroup'
import Footer from '../components/Footer/Footer'
import SlideHeader from '../components/SlideHeader'

import iconCard_1 from "../images/iconCard_1.png"
import iconCard_2 from "../images/iconCard_2.png"
import iconCard_3 from "../images/iconCard_3.png"

const Wrapper = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #EBEBEB;
`

const TitleStep = styled("h2")`
  font-size: 2.7em;
  font-family: Courier Cyrillic;
  font-weight: normal;
  text-align: center;
  color: #004C74;
`

const LandingPage = () => {
    return (
        <Wrapper>
            <SlideHeader />
            <TitleStep> 3 простых шага </TitleStep>
            <CardGroup arr={arr} />
        </Wrapper>
    )
}

const arr = [
    { id: 1, img: iconCard_1, text: "Нажмите кнопку" },
    { id: 2, img: iconCard_2, text: "Введите данные" },
    { id: 3, img: iconCard_3, text: "Получите готовый файл" }
  ];

export default LandingPage;
