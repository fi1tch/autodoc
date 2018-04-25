import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../SubHeader/SubHeader";
import Card from "../Card/Card";
import "./styles.css";
// Card images
import icon1 from "../../images/icon 1.png";
import icon2 from "../../images/icon 2.png";
import icon3 from "../../images/icon 3.png";

// class name variables
const card_wrap = "card-wrap";
const image_wrap = "img-wrap";
const text_wrap = "text-wrap";

const HowItWorks = () => (
  <section className="hiw-section">
    <SubHeader h1="3 простых шага."/>
    <div className="hiw-card-container">
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={icon1}
        title="Нажмите на кнопку."
      />
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={icon2}
        title="Введите данные."
      />
      <Card
        cardWrap={card_wrap}
        imgWrap={image_wrap}
        textWrap={text_wrap}
        src={icon3}
        title="Скачайте файл."
      />
    </div>

  </section>
);

export default HowItWorks;
