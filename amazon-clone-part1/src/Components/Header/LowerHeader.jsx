import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import classes from "./Header.module.css"

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
        <ul>
            <li>
             <AiOutlineMenu/>
                <p>All</p>
            </li>
            <li>Today's Service</li>
            <li>Costumer Services</li>
            <li>Registery</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader