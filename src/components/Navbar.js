import React from 'react'
import NavItems from '../constants/links'
import { Link } from 'gatsby'
import Flex from "./styledComponents/Flex"
import Container from "./styledComponents/Container"

export default function Navbar({ className }) {
  
  return (
    <Container fullVertical className={className}>
      <Flex justifyCenter>

        <Flex justifyBetween alignCenter style={{ padding: '1rem 1.25rem' }}>
          <ul>
            {NavItems.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Container>    
  )
}
