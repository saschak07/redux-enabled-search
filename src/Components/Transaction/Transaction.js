import React from 'react'
import './Transaction.css'

const Transaction = (props) => {
    return (
    <li className="w3-hover-green w3-light-green listItem"
        onClick={props.click}>
        <div className="w3-container w3-cell">
            <p>${props.amount}</p>
        </div>
        <div className="w3-container w3-cell">
            <p>{props.date}</p>
        </div>
        <div className="w3-container w3-cell">
            <p>{props.transaction_details}</p>
        </div>
        <div className="w3-container w3-cell">
            <p>{props.type}</p>
        </div>
    </li>
  )
}

export default Transaction