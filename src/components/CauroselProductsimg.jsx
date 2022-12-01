import React from 'react';
import { Carousel } from 'react-bootstrap';

const CauroselProductsimg = ({productImgs}) => {
    return (
        <Carousel variant="dark">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={productImgs?.[0]}
                alt="First slide"
            />
            
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={productImgs?.[1]}
                alt="Second slide"
            />

            
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={productImgs?.[2]}
                alt="Third slide"
            />

           
        </Carousel.Item>
    </Carousel>
    );
};

export default CauroselProductsimg;