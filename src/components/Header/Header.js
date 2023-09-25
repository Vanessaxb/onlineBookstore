import React from 'react'
import "./Header.css"

export default function Header({showHeader}) {
    if (!showHeader) {
        return null; // Don't render the header when showHeader is false
      }
    return (
        <div className='header-container'>
            <h1>Beattie BookStore</h1>
        </div>    

    )
}