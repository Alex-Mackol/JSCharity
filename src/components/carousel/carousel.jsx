import React from 'react'
import { Carousel } from 'react-bootstrap';
import Image from '../../img/img_boy.svg'


const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image}
                    alt="First slide"
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image}
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;