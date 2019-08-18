import React from 'react'
import { MdMenu } from "react-icons/md"


const BurgerIcon = ({ handleIsOpen, className }) => {
  return (
    <div className={className}>
      <button type='button' onClick={handleIsOpen}>
          <MdMenu />
      </button>
    </div>
  )
}

export default BurgerIcon