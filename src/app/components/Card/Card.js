import React from "react";
import "./styles.css";

const Card = ({
  cardWrap,
  imgWrap,
  src,
  textWrap,
  title,
}) => (
  <div className={`card-wrap ${cardWrap}`}>
      <div className={`card-text-wrap ${textWrap}`}>
          <h3>{title}</h3>
      </div>
    <div className={`card-img-wrap ${imgWrap}`}>
      <img src={src} />
    </div>

  </div>
);

export default Card;
