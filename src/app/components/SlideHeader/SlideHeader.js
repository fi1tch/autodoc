import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const SlideHeader= () => (
    <div className="slide-header">

        <div className="overlay-header">

            <div className="sub-heading">
              <h3 className="sub-h2">Мы делаем рутинную работу за Вас.</h3>
            </div>

            <div className="cta-join btn-width">
                <Link to="/generating"><h3 className="sub-h3">Генерировать</h3></Link>
            </div>


        </div>

    </div>
);

export default SlideHeader;
