import React from "react";
import {Carousel, Link, Button, Container, Row } from "react-bootstrap";
import Img1 from '../img/292163084_1195152964577573_3415729643302050120_n.jpg'
import Img2 from '../img/c1e7b35c450347c384e680f857a1.jpg'
import Img3 from '../img/photo_2023-06-03_08-26-31.jpg'

export function Main() {
    return (
      <Carousel data-bs-theme="light shadow-main">
        <Carousel.Item className="oneIMG">
          <img
            className="d-block w-100 "
            src={Img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Я розробляю дрон для ЗСУ!</h1>
            <h3>Для допомги в розробці перейдіть в вкладку Donate</h3>
            <a href="3" className="A-Slider"  ><u>Дізнатись більше! <br/></u></a>
            <br/>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block twoIMG "
            src={Img2}
            alt="Second slide"
            
          />
          <Carousel.Caption>
            <h1>В розробці робот валлі!</h1>
            <h3>
                <a href="3" className="A-Slider"  >
                    <u>Дізнатись більше! <br/></u>
                </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="">
          <img
            className="d-block w-100 freeIMG"
            src={Img3}
            alt="Third slide"
            
          />
          <Carousel.Caption >
            <h1>Маска вовка вже в продажі!</h1>
            <h3>
                <a href="3" className="A-Slider"  ><u>Дізнатись більше! <br/></u></a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }


 