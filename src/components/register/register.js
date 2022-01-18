import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { Box, FlexBox, Title, Text } from '../../ui';
import { registerUser } from '../../api/api';

export default function Register() {
  let navigate = useNavigate()

  const [user, setUser] = useState({ name: '', emailPhone: '', password: '' })

  const handleSubmit = async event => {
    event.preventDefault()
    const res = await registerUser({
      username: user.name,
      emailPhone: user.emailPhone,
      password: user.password
    });
    if (res.status === 'created') {
      navigate('/login')
    }
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
        <Title textAlign='center' mb='30px'>REGISTER</Title>
        <Link to='/'><Text mt={15} textDecoration='none'>Back to home</Text></Link>
        <Form onSubmit={handleSubmit}>
          <Form.Floating className='mb-3'>
            <Form.Control
              required
              id='name'
              type='text'
              placeholder='Full name'
              onChange={e => { setUser({ ...user, name: e.target.value }) }}
            />
            <label htmlFor='name'>Full name</label>
            <Form.Control.Feedback type='invalid'>
              This field is required.
            </Form.Control.Feedback>
          </Form.Floating>
          <Form.Floating className='mb-3'>
            <Form.Control
              required
              id='email'
              type='email'
              placeholder='name@example.com'
              onChange={e => { setUser({ ...user, emailPhone: e.target.value }) }}
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
              onChange={e => { setUser({ ...user, password: e.target.value }) }}
            />
            <label htmlFor='password'>Password</label>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Floating>
          <Button variant='primary' className='w-100 my-2' type='submit'>
            CREATE ACCOUNT
          </Button>
          <Box mt={15} textAlign='center'>Already have an account? <Link to='/login'>Log in</Link></Box>
        </Form>
      </Box>
    </FlexBox>
  )
}