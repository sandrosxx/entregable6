import React, { useEffect } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../../store/slice/purchases.slice';

const Purchases = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(state => state.purchases);
    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, []);

    return (
        <div>
            <h1>purchases</h1>
            <Row>
                <Col>
                    <ListGroup variant='flush'>
                        {purchases.map(purchase => (

                            <ListGroup.Item key={purchase.id}>
                                {purchase.cart.products.map(product => (
                                    <ListGroup.Item key={product.id}>
                                        {/* <Link to={`/Product/${product.id}`} style={{ textDecoration: 'none' }}> */}
                                            <h3>{product.createdAt}</h3>
                                            <h3>{product.title}</h3>
                                            <h3>{ }</h3>
                                            <h3>${product.price}</h3>
                                        {/* </Link> */}
                                    </ListGroup.Item>
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