import React, { useEffect, useState } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { postCartThunk } from '../../store/slice/cart.slice';
import { getProductThunk } from '../../store/slice/products.slice';
import CauroselProductsimg from '../CauroselProductsimg';



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
    const [quantity, setQuantity] = useState();
    const addCart = () => {
        const productToCart = {
            id: products?.id,
            quantity: quantity,
        }
        dispatch(postCartThunk(productToCart))
    }

    console.log(relateproducts);
    return (
        <div>
            <h1>{products?.title}</h1>
            <input
                type="text"
                onChange={(e) => setQuantity(e.target.value)}
            />
            <Button onClick={addCart}>ADD CART</Button>
            <Row>
                {/* description */}
                <Col lg={9}>
                    <CauroselProductsimg className='img-fluid' productImgs={products?.productImgs} />
                    <Card>
                        <Card.Body >
                            <Card.Title> {products?.title}</Card.Title>
                            <Card.Text>
                                <p>{products?.description}</p>
                            </Card.Text>
                            <div className='purchasescar'>
                            <Card.Text>
                                <span>Price</span>
                                <br />${products?.price}
                            </Card.Text>
                            <Card.Text>
                                <span>Quantity</span>
                                <br />
                            
                            <Button variant="outline-secondary">-</Button>
                            <input className='box' type='number' value='1' />
                            <Button variant="outline-secondary">+</Button>
                            </Card.Text>
                            </div>                            
                        </Card.Body>
                        <Button variant="primary" onClick={addCart} >add Cart</Button>
                    </Card>
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