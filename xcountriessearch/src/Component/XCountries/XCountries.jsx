import React, { useEffect, useState } from 'react'
import "./XCountries.css"
import CountryCard from '../CountryCard/CountryCard';
const XCountries = ({searchText}) => {
    
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);

    const fetchCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setData(data);
            setFilteredData(data);
        } catch (error) {
            console.error("Failed to fetch data: ", error);
            setError(error.message);
        }
    }

    const searchCountry = () => {
        if(searchText) {
            const filteredCounty = data.filter(data => data.name.common.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredData(filteredCounty);
        } else {
            setFilteredData(data);
        }
    }

    useEffect(() => {
        searchCountry();
    }, [searchText]);

    useEffect(() => {
        fetchCountries();
    }, []);

    if(error) {
        <p>Error: {error}</p>
    }
  
  return (
    <div className='contries'>
        {filteredData.length > 0 && (
           filteredData.map((item, id) => <CountryCard data = {item} key = {id}/>)
        )}
    </div>
  )
}

export default XCountries