import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap';
import { Box, FlexBox, Title } from '../../ui'

export default function Main() {
  return (
    <FlexBox
      width='100%'
      alignItems='center'
      justifyContent='center'
      height='calc(100vh - 56px)'
    >
      <Box texAlign='center'>
        <Title>APTECHKA</Title>
        <LinkContainer to='/login'><Button className='mx-1' >Log in</Button></LinkContainer>
        <LinkContainer to='/register'><Button className='mx-1' variant='secondary'>Register</Button></LinkContainer>
      </Box>
    </FlexBox>
  )
}