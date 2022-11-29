import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit } = useForm()
    // const dispatch = useDispatchatch();
    const navigate = useNavigate();

    const submit = (data) => {
        alert('hola mundo' + data)
        console.log(data);
        axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login/", data)
            .then(res => {
                navigate('/')
                localStorage.setItem('token', res.data.data.token)

            })
            .catch(err => {
                if (err.response?.status === 404) {
                    alert('esta mal la contrasenia')
                } else {
                    console.log(err.respose?.data);
                }
            })
        }

    return (
        <div>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Groupp className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" {...register("name")} />
                </Form.Groupp>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" {...register("genre")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="text" {...register("duration")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="date" {...register("release_date")} />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Login;