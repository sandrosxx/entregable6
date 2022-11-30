import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slice/cart.slice';

const Cart = ({handleClose, show } ) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getCartThunk())
    }, [])
    const cart = useSelector(state=> state.cart)
    return (
        <>
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cart.map(product=>(
                    <div key={product.id}>{product.title}</div>
                ))}
              
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
};

export default Cart;