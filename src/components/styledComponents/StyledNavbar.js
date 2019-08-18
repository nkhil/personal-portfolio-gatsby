// import React from "react"
import styled, { css } from 'styled-components';
import Navbar from "../Navbar";

const StyledNavbar = styled(Navbar)` 

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    a {
      display: block;
      padding: 1rem;
      text-decoration: none;
      text-transform: capitalize;
      color: black;

      &:hover {
        border-bottom: 1px solid blue;
      }
    }
  }

  @media screen and (max-width: 599px) {
    
    /* display: ${props => {
      if (props.isOpen) {
        console.log('\n isOpen =>', props.isOpen);
        return ''
      }
      return 'none';
    }}; */

    transition: all 2s ease-out;

    ${props => {
      if (props.isOpen) {
        return css`
          opacity: 1;
          height: auto;
        `
      }
      return css`
        opacity: 0; 
        height: 0;
        overflow: hidden;
      `
    }}

    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      text-align: center;
      margin: 0;
      padding: 0;
    };

  }

`;

export default StyledNavbar;