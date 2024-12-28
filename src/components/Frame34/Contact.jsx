import { useState } from 'react';
import './Contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import { motion } from "motion/react"
const Contact = () => {
	const [validated, setValidated] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.preventDefault();
			setValidated(true);

			const serviceID = 'service_xyqjzjp';
			const templateID = 'template_g883yoq';
			const publicKey = 'XDZcE2EU-Liic8fwI';

			try {
				await emailjs.send(serviceID, templateID, formData, publicKey);
				alert('Message sent successfully!');
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					message: '',
				});
			} catch (error) {
				console.error('Error:', error);
				alert('An error occurred while sending the message. Please try again.');
			}
		}
	};

	return (
		<div className='contact'>
			<h1 className='contact-heading'>FOR FURTHER QUERIES</h1>
			<Row>
				<Col >
					<motion.div initial={{opacity:0, x:-200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once: true}} className='map'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.595393297874!2d80.25872747463835!3d13.061406687262295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526707ca7b3ea3%3A0xed7f3109bee70e4f!2sSpencer%20Plaza!5e0!3m2!1sen!2sin!4v1730231249818!5m2!1sen!2sin'
							width='650'
							height='640'
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</motion.div>
				</Col>
				<Col>
					<motion.div className='contact-form' initial={{opacity:0, x:200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once: true}}>
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<h2 className='contact-heading1'>CONTACT US</h2>
							<Form.Group controlId='firstName'>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type='text'
									name='firstName'
									placeholder='First Name'
									className='form1'
									value={formData.firstName}
									onChange={handleChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Please provide your first name.
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group controlId='lastName'>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type='text'
									name='lastName'
									placeholder='Last Name'
									className='form1'
									value={formData.lastName}
									onChange={handleChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Please provide your last name.
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group controlId='email'>
								<Form.Label>Email *</Form.Label>
								<Form.Control
									type='email'
									name='email'
									placeholder='Email'
									className='form1'
									value={formData.email}
									onChange={handleChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Please provide a valid email.
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group controlId='message'>
								<Form.Label>Message *</Form.Label>
								<Form.Control
									as='textarea'
									name='message'
									rows={3}
									placeholder='Message'
									className='form1'
									value={formData.message}
									onChange={handleChange}
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Please provide a message.
								</Form.Control.Feedback>
							</Form.Group>
							<Button className='btn4 ' type='submit'>
								Submit
							</Button>
						</Form>
					</motion.div>
				</Col>
			</Row>
		</div>
	);
};

export default Contact;

