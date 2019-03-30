import React from 'react'
import { Card } from 'semantic-ui-react'

const CardExampleFluid = () => (
  <Card.Group>
    <Card fluid color='red' header='message 1' />
    <Card fluid color='orange' header='Message 2' />
    <Card fluid color='yellow' header='message 3' />
  </Card.Group>
)

export default CardExampleFluid