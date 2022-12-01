import React, { useEffect } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../../store/slice/purchases.slice';

const Purchases = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(state => state.purchases);
    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, []);

    return (
        <div>
            <h1>My purchases</h1>
            <Row>
                <Col>
                    <ListGroup variant='flush'>
                        {purchases.map(purchase => (
                            <ListGroup.Item key={purchase.id}>
                                {purchase.cart.products.map(product => (
                                    <Card key={product.id}>
                                        <Link to={`/Product/${product.id}`} style={{ textDecoration: 'none' }}>
                                            <Card.Header as="h5">{product?.createdAt}</Card.Header>
                                            <Card.Body className='purchasescar'>
                                                <Card.Text>{product.title}</Card.Text>
                                                <Card.Text className='box'>
                                                    {product.productsInCart.quantity}
                                                </Card.Text>
                                                <Card.Text>
                                                    ${product.price}
                                                </Card.Text>
                                            </Card.Body>
                                        </Link>
                                    </Card>

                                ))}
                            </ListGroup.Item>
                        ))}

                    </ListGroup>
                </Col>

            </Row>


        </div >
    );
};

export default Purchases;