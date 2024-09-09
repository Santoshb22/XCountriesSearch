import React from 'react'
import "./CountryCard.css"
const CountryCard = ({data}) => {
  return (
    <div className='countryCard'>
        <img src={data.flags.png} alt={data.name.common} />
        <p className='countryName'>{data.name.common}</p>
    </div>
  )
}

export default CountryCard