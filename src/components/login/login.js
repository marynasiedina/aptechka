import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, FlexBox, Title, Text } from '../../ui'
import { Button, Form } from 'react-bootstrap';

export default function Login({ setToken }) {
  const [validated, setValidated] = useState(false);
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    setToken(true)
    navigate('/dashboard')
  };

  return (
    <FlexBox
      m='0 auto'
      width='100%'
      height='calc(100vh - 56px)'
      alignItems='center'
      justifyContent='center'
    >
      <Box p='30px' width={350} border='2px solid #adb5bd' borderRadius='10px' >
        <Title textAlign='center' mb='30px'>LOG IN</Title>
        <Link to='/'><Text mt={15} textDecoration='none'>Back to home</Text></Link>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Floating className='mb-3'>
            <Form.Control
              required
              id='email'
              type='email'
              placeholder='name@example.com'
            />
            <label htmlFor='email'>Email address</label>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Floating>
          <Form.Floating className='mb-3'>
            <Form.Control
              required
              id='password'
              type='password'
              placeholder='Password'
            />
            <label htmlFor='password'>Password</label>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Floating>
          <Button variant='primary' className='w-100 my-2' type='submit'>
            SING UP
          </Button>
          <Box mt={15} textAlign='center'>Don't have an account? <Link to='/register'>Register</Link></Box>
        </Form>
      </Box>
    </FlexBox>
  )
}
