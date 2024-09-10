import React from 'react'
import "./Header.css"
const Header = ({setSearchText, searchText}) => {

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
  return (
    <div className='header'>
        <input type="text" placeholder='Search Country' value={searchText} onChange={handleChange}/>
    </div>
  )
}

export default Header