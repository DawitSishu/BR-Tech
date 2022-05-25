import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from "react-bootstrap";
import EmailSuccess from './EmailSuccess';


const ContactForm = () => {
    const [validated, setValidated] = useState(false);
    const [submitted,setSubmitted] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        if (e.currentTarget.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          setSubmitted(false)
        }else{
            e.preventDefault();

            emailjs.sendForm('service_hyocft9', 'template_778s0bg', form.current, 'ES9--fYiEs_9wNcs-')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
            setSubmitted(true)
        }
        setValidated(true);

       
    };

    return (
        <div>
            {submitted && <EmailSuccess />}
            <Form ref={form} noValidate validated={validated} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" name="name"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>subject</Form.Label>
                    <Form.Control type="text" placeholder="enter main subject" name="subject" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your objective message" name="message" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
           
        </div>
    )
}
export default ContactForm