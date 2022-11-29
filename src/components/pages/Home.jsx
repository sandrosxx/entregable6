import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FilterThunk, getProductThunk, idThunk } from '../../store/slice/products.slice';

const Home = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product)
    const [productsCategory, setProductsCategory] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        dispatch(getProductThunk());
        axios
            .get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
            .then(res => setProductsCategory(res.data.data.categories))
    }, [])

    // console.log(productsCategory)
    return (
        <div>
            <Row>
                <Col lg={3}>
                    {
                        productsCategory.map(category => (
                            <ListGroup.Item
                                key={category.id}
                                onClick={() => dispatch(idThunk(category.id))}
                                style={{ cursor: 'pointer' }}
                            >
                                {category.name}
                            </ListGroup.Item>
                        ))
                    }
                </Col>

                <Col lg={9} >
                    <h1>hola home</h1>

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="What are you looking for?"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={input}
                            onChange={e => setInput(e.target.value)}

                        />
                        <Button
                            variant="primary"
                            id="button-addon2"
                            onClick={() => dispatch(FilterThunk(input))}
                        >
                            Search
                        </Button>

                    </InputGroup>
                    <Row xs={1} md={2} className="g-4">
                        {product.map((productitem) => (

                            <ul key={productitem.id}>
                                <Link to={`/Product/${productitem.id}`}>
                                    <Col>
                                        <Card >
                                            <Card.Img variant="top" src={productitem.productImgs[0]} />
                                            <Card.Body >
                                                <Card.Title> {productitem.title}</Card.Title>
                                                <Card.Text>
                                                    <span>Price</span>
                                                    <br />${productitem.price}
                                                </Card.Text>
                                                <Button variant="primary">add Cart</Button>
                                            </Card.Body>
                                        </Card>

                                        {/* <Link to={`/Product/${productitem.id}`}> */}
                                        {/* {productitem.title} */}
                                        {/* <img src={productitem.productImgs[0]} width='100px' alt="" /> */}



                                    </Col>
                                </Link>
                            </ul>
                        ))}
                    </Row>
                </Col>
            </Row>



        </div>
    );
};

export default Home;