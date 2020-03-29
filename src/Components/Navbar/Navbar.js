import React from 'react'

const navbar = () => {
return (
    <div>
        <div className="w3-bar w3-dark-grey nav">
            <a href="/" className="w3-bar-item w3-button">Home</a>
            <a href="/transaction/D" className="w3-bar-item w3-button">Deposits</a>
            <a href="/transaction/W" className="w3-bar-item w3-button">Withdrawals</a>
            <input type="text" className="w3-bar-item w3-input" placeholder="Search.."/>
            <a href="/" className="w3-bar-item w3-button w3-green">Go</a>
    </div>
    </div>
)
}

export default navbar