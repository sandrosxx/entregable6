import React, { useEffect, useState } from 'react';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductThunk } from '../../store/slice/products.slice';

const ProductId = () => {
    const { id } = useParams();
    const productList = useSelector(state => state.product)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductThunk())
    }, []);
    const products = productList.find(product => product.id === Number(id))
    const relateproducts = productList.filter(product =>
        product.category.id === products.category.id &&
        product.id !== products.id
    )
    // const [quantity, setQuantity]=useState();
    // const addCart=()=>{
    //     id: 3,
    //     quantity: 5
    
    // }

    console.log(relateproducts);
    return (
        <div>
            <h1>{products?.title}</h1>
            <input type="text" />
            <Button onClick={addCart}>ADD CART</Button>
            <Row>
                {/* description */}
                <Col lg={9}>
                    <img src={products?.productImgs[0]} className='img-fluid' />

                </Col>
                {/* relacionadad */}
                <Col lg={3}>
                    <h3>Related Product:</h3>
                    <ListGroup variant="flush">
                        {relateproducts.map(relate => (
                            <ListGroup.Item key={relate.id}>
                                <Link to={`/Product/${relate.id}`} style={{ textDecoration: 'none' }}>
                                    <h3>{relate.title}</h3>
                                    <img src={relate?.productImgs[0]} className='img-fluid' />

                                </Link>
                            </ListGroup.Item>






                        ))}
                    </ListGroup>
                </Col>
            </Row>


        </div>
    );
};

export default ProductId;