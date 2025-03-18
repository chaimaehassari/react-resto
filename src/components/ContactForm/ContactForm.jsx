import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Col, Button } from 'react-bootstrap';
import ValidFeedback from './ValidFeedback';
import InvalidFeedback from './InvalidFeedback';

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [date, setDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [comments, setComments] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();

            const results = document.getElementById('results');
            results.innerHTML = `
                <div class="modal" id="modal">
                    <div class="modal-dialog flex items-center justify-center">
                        <div class="modal-content rounded-lg bg-white shadow-lg">
                            <div class="modal-header border-b-2 p-4">
                                <h5 class="modal-title text-xl font-bold text-gray-800">Thank You!</h5>
                            </div>
                            <div class="modal-body p-4 text-gray-700">
                                <p>Dear ${firstName} ${lastName},</p>
                                <p>Thank you for your reservation for ${numberOfGuests} people on date of ${date}. You will receive a confirmation email shortly on ${emailAddress}.</p>
                                <p>See you soon!</p>
                            </div>
                            <div class="modal-footer p-4 flex justify-between">
                                <button type="button" class="btn bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700" data-bs-dismiss="modal" onClick={() => window.location.reload()}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('contact-page').classList.add('scrolling-stop');
            document.getElementById('footer').style.display = 'none';
        }

        setValidated(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <Form noValidate validated={validated} className="bg-gray-800 text-white p-5 rounded-lg" id="form" onSubmit={handleSubmit}>
                <Form.Group className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Col>
                        <Form.Label htmlFor="first-name" className="text-lg">First name</Form.Label>
                        <Form.Control
                            className="rounded-md bg-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            required
                        />
                        <ValidFeedback />
                        <InvalidFeedback message="Please enter your first name." />
                    </Col>
                    <Col>
                        <Form.Label htmlFor="last-name" className="text-lg">Last name</Form.Label>
                        <Form.Control
                            className="rounded-md bg-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                            type="text"
                            name="last-name"
                            id="last-name"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            required
                        />
                        <ValidFeedback />
                        <InvalidFeedback message="Please enter your last name." />
                    </Col>
                </Form.Group>

                <Form.Group className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Col>
                        <Form.Label htmlFor="phone-number" className="text-lg">Phone number</Form.Label>
                        <Form.Control
                            className="rounded-md bg-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                            type="tel"
                            pattern="[0-9]{5}[0-9]{6}"
                            name="phone-number"
                            id="phone-number"
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            required
                        />
                        <ValidFeedback />
                        <InvalidFeedback message="Please enter your mobile number." />
                    </Col>
                    <Col>
                        <Form.Label htmlFor="email" className="text-lg">Email address</Form.Label>
                        <Form.Control
                            className="rounded-md bg-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                            type="email"
                            name="email"
                            id="email"
                            value={emailAddress}
                            onChange={(event) => setEmailAddress(event.target.value)}
                            required
                        />
                        <ValidFeedback />
                        <InvalidFeedback message="Please enter your email address." />
                    </Col>
                </Form.Group>

                <Form.Group className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Col>
                        <Form.Label htmlFor="date" className="text-lg">Date</Form.Label>
                        <Form.Control
                            className="rounded-md bg-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                            type="date"
                            name="date"
                            id="date"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                            required
                        />
                        <ValidFeedback />
                        <InvalidFeedback message="Please choose a date." />
                    </Col>
                    <Col>
                        <Form.Label htmlFor="guests" className="text-lg">Number of guests</Form.Label>
                        <Form.Control
                            className="rounded-md bg-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                            type="number"
                            name="guests"
                            id="guests"
                            value={numberOfGuests}
                            onChange={(event) => setNumberOfGuests(event.target.value)}
                            required
                        />
                        <ValidFeedback />
                        <InvalidFeedback message="Please choose the number of guests." />
                    </Col>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor="comments" className="text-lg">Comments</Form.Label>
                    <Form.Control
                        className="rounded-md bg-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                        as="textarea"
                        name="comments"
                        cols={20}
                        rows={3}
                        id="comments"
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}
                    />
                </Form.Group>

                <Button
                    variant="success"
                    type="submit"
                    className="w-full py-3 mt-4 rounded-md text-white"
                    style={{ backgroundColor: '#E4C268' }} 
                >
                    Submit
                </Button>
            </Form>

            <div id="results"></div>
        </motion.div>
    );
}

export default ContactForm;
