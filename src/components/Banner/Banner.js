import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css'

import banner1 from '../../images/banner/banner1.jpg'
import banner2 from '../../images/banner/banner2.jpg'
import banner3 from '../../images/banner/banner3.jpg'
import banner4 from '../../images/banner/banner4.jpg'
import banner5 from '../../images/banner/banner5.jpg'

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="fs-2">Ride as much or as little, as long or as short as you feel.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <p className="fs-2">When my legs hurt, I say: “Shut up legs! Do what I tell you to do!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <p className="fs-2">
            Nothing compares to the simple pleasure of riding a bike
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src={banner4}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <p className="fs-2">
            A bicycle ride around the world begins with a single pedal stroke.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src={banner5}
            alt="Fifth slide"
          />

          <Carousel.Caption>
            <p className="fs-2">
            The race is won by the rider who can suffer the most.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
};

export default Banner;
