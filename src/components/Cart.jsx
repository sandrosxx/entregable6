import React, { useEffect } from 'react';
import { Button, Card, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkoutCartThunk, getCartThunk } from '../store/slice/cart.slice';

const Cart = ({ handleClose, show }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartThunk())
    }, [])
    const cart = useSelector(state => state.cart)
    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cart.map(product => (
                        <Card key={product.id}>
                            <Link to={`/Product/${product.id}`} style={{ textDecoration: 'none' }}>
                                <Card.Header as="h5">{product.brand}</Card.Header>
                                <Card.Body >
                                    <Card.Text>{product.title}</Card.Text>
                                    <Card.Text className='box'>
                                        {product.productsInCart.quantity}
                                    </Card.Text>
                                    <Card.Text>
                                        Total: ${product.price}
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>


                    ))}

                    <Button onClick={() => dispatch(checkoutCartThunk())}>Checkout</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Cart;