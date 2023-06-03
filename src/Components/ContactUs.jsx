import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            console.log('Form submitted');
        } else {
            console.log('Please fill in all the fields');
        }
    };

    return (
        <Row style={{ margin: '100px' }}>
            <Col sm={6}>
                <h5 style={{fontWeight: 'bold', color: '#8F9BB3'}}>Contact Us</h5>
                <h1  style={{ color: 'rgb(236, 72, 153)' , margin: '20px 0px', fontWeight: 'bolder' }}>Get in touch with ShadiKarle.com</h1>
                <p style={{color: '#8F9BB3'}}>Reach us out via phone, fax or email</p>
                <div style={{fontWeight: 'bold', color: 'rgb(236, 72, 153)'}}>
                <p style={{fontWeight: 'bolder'}}>
                <MDBIcon style={{ color: 'rgb(236 72 153)' }} icon='phone' className='me-3' />
                    + 92 306 430 3941</p>
                <p style={{fontWeight: 'bolder'}}>
                <MDBIcon style={{ color: 'rgb(236 72 153)' }} icon='print' className='me-3' />
                    + 92 344 061 8166</p>
                <p style={{fontWeight: 'bolder'}}>
                <MDBIcon style={{ color: 'rgb(236 72 153)' }} icon='envelope' className='me-3' />
                    rehman.hanif16@gmail.com</p>
                </div>
            </Col>
            <Col sm={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label style={{ color: 'rgb(236, 72, 153)' }}>Name*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleNameChange}
                            style={{
                                border: 'none',
                                borderBottom: '2px solid rgb(236, 72, 153)',
                                borderRadius: '0',
                                boxShadow: 'none',
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label style={{ color: 'rgb(236, 72, 153)', marginTop: '30px' }}>Email address*</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            style={{
                                border: 'none',
                                borderBottom: '2px solid rgb(236, 72, 153)',
                                borderRadius: '0',
                                boxShadow: 'none',
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label style={{ color: 'rgb(236, 72, 153)', marginTop: '30px' }}>Message*</Form.Label>
                        <Form.Control
                            as="textarea"
                              rows={1}
                            placeholder="Enter your message"
                            value={message}
                            onChange={handleMessageChange}
                            style={{
                                border: 'none',
                                borderBottom: '2px solid rgb(236, 72, 153)',
                                borderRadius: '0',
                                boxShadow: 'none',
                            }}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ backgroundColor: 'rgb(236, 72, 153)', marginTop: '30px', width: '110px',  }}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default ContactForm;
