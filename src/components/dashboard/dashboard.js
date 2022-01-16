import React from 'react';
import { Button } from 'react-bootstrap';
import { Box, FlexBox, Title } from '../../ui'

export default function Dashboard({ setToken }) {
  return (
    <FlexBox
      width='100%'
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >
      <Box texAlign='center'>
        <Title>Dashboard</Title>
        <Button onClick={() => setToken(false)} className='mx-1' >Log out</Button>
      </Box>
    </FlexBox>
  )
}