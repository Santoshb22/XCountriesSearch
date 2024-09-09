import React from 'react'
import "./Header.css"
const Header = ({setSearchText}) => {

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
  return (
    <div className='header'>
        <input type="text" placeholder='Search Country' onChange={handleChange}/>
    </div>
  )
}

export default Header