import React from 'react'
import styled from 'styled-components'
import Container from '../components/styledComponents/Container'
import Flex from '../components/styledComponents/Flex'
import image from '../../public/images/image.png'

const HeroContainer = styled.div`
  min-height: 60vh;
  background-color: blue;
  color: white;
`

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
      <Flex column alignCenter>
        <img src={image} alt="Nikhil"/>
        <h1>Hi, my name is Nikhil</h1>
        <p>I really like making things and solving interesting problems</p>
      </Flex>
      </Container>
    </HeroContainer>
  )
}

export default Hero;