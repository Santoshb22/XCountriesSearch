import React, { useEffect, useState } from 'react'
import "./XCountries.css"
import CountryCard from '../CountryCard/CountryCard';
const XCountries = ({searchText}) => {
    
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const fetchCountries = async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();

            return data;
        } catch (e) {
            console.error(e);
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
       async function loadCountries() {
            const countries = await fetchCountries();
            setData(countries);
            setFilteredData(countries);
        }

        loadCountries();
    }, []);

  
  return (
    <div className='contries'>
        {filteredData.length > 0 && (
           filteredData.map((item, id) => <CountryCard data = {item} key = {id}/>)
        )}
    </div>
  )
}

export default XCountries