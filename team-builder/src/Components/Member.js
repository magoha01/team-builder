import React from 'react'
import styled from 'styled-components'

const Div = styled.h2`
text-align: center;
`


export default function Member(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
      
    <Div>
        <h2>{details.name}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
    </Div>
  
  )
}
