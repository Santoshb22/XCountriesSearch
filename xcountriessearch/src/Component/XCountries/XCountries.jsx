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
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.error(`Failed to fetch data: ${response.status} ${response.statusText}`);
                return null;
            }
        } catch (error) {
            console.error("Failed to fetch data: ", error);
            setError(error.message);
            return null;
        }
    }

    const searchCountry = () => {
        if(searchText) {
            const filteredCounty = data.filter(data => data.name.common.toLowerCase().includes(searchText.toLowerCase()));
            return filteredCounty;
        } else {
            return data;
        }
    }

    useEffect(() => {
        const filteredCounty = searchCountry();
        setFilteredData(filteredCounty);
    }, [searchText]);

    useEffect(() => {
       async function loadCountries() {
        const countries = await fetchCountries();
        setData(countries);
        setFilteredData(countries);
        }

        loadCountries();
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