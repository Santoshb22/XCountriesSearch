import React, { useState } from 'react'
import XCountries from './Component/XCountries/XCountries'
import Header from './Component/Header/Header'

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header setSearchText={setSearchText} searchText = {searchText}/>
      <XCountries searchText = {searchText}/>
    </div>
  )
}

export default App