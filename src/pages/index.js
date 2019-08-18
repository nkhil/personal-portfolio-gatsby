import React, { useState } from "react"
import StyledNavbar from "../components/styledComponents/StyledNavbar"
import GlobalStyles from "../components/styledComponents/GlobalStyles"
import StyledBurgerIcon from "../components/styledComponents/StyledBurgerIcon"

export default () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  
  return (
    <>
      <GlobalStyles />
      <StyledBurgerIcon handleIsOpen={ handleIsOpen }/>
      <StyledNavbar isOpen={ isOpen } />      
    </>
  )
}
