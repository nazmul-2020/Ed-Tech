import React from 'react';
import { Button, Form } from 'react-bootstrap';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div className='container my-5' id='contact'>
            <h2 className='text-center'>Contact Us</h2>
            <Form className='mt-4 w-50 mx-auto'>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control type="name" required placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Messenger" rows={3} />
                    </Form.Group>
                    <Button className='mx-auto d-flex' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>

    );
};

export default ContactUs;