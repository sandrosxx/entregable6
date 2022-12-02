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
    const [quantity, setQuantity] = useState('');
    const addCart = () => {
        const productToCart = {
            id: products?.id,
            quantity: quantity,
        }
        console.log(productToCart)
        dispatch(postCartThunk(productToCart))
    }

    // console.log(relateproducts);
    // const [counterR, setCounterR] = useState(1);

    return (
        <div>
            <h1>{products?.title}</h1>

            <Row>
                {/* description */}
                <Col lg={6} >
                    <CauroselProductsimg   productImgs={products?.productImgs} />

                </Col>
                <Col lg={6}>
                    <Card >
                        <Card.Body >
                            <Card.Title> {products?.title}</Card.Title>
                            <Card.Text>
                                {products?.description}
                            </Card.Text>
                            <div className='purchasescar'>
                                <Card.Text>
                                    <span>Price</span>
                                    <br />${products?.price}
                                </Card.Text>
                                <Card.Text>
                                    <span>Quantity</span>
                                    <br />

                                    <Button
                                        onClick={() => setQuantity(Number(quantity) - 1)}
                                        disabled={quantity === 1}
                                        variant="outline-secondary"
                                    >
                                        -
                                    </Button>
                                    <input
                                        className='box'
                                        type='number'
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                    <Button
                                        onClick={() => setQuantity(Number(quantity) + 1)}
                                        variant="outline-secondary"
                                    >
                                        +
                                    </Button>
                                </Card.Text>
                            </div>
                        </Card.Body>
                        <Button variant="primary" onClick={addCart} >add Cart</Button>
                    </Card>
                </Col>
                {/* relacionadad */}
                <Col lg={12}>
                    <h3>Discover similar items</h3>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {relateproducts.map(relate => (
                            <Col key={relate.id}>
                                <Card>
                                    <Link to={`/Product/${relate.id}`} style={{ textDecoration: 'none' }}>
                                        {/* <h3>{relate.title}</h3>
                                    <img src={relate?.productImgs[0]} className='img-fluid' />                                           */}
                                        <Card.Img
                                            variant="top"
                                            src={relate.productImgs[0]}
                                            style={{ height: 200, objectFit: 'contain' }}
                                        />
                                        <Card.Body >
                                            <Card.Title>{relate.title}</Card.Title>
                                            <Card.Text>
                                                <span>Price</span>
                                                <br /> ${relate.price}

                                            </Card.Text>
                                            <Card.Text>
                                                {/* <Button onClick={()=>setCounterR(counterR - 1)} disabled={counter === 1}  variant="outline-secondary">-</Button>
                                                <input
                                                    className='box'
                                                    type='number'
                                                    value={counterR}
                                                    // onChange={(e) => setQuantity(e.target.value)}
                                                />
                                                <Button onClick={()=>setCounterR(counterR + 1)} variant="outline-secondary">+</Button> */}
                                            </Card.Text>
                                            <Button variant="primary">add Cart</Button>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>


        </div>
    );
};

export default ProductId;