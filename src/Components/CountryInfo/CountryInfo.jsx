
import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { apiURL } from '../Utility/api';

const CountryInfo = () => {

  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = [true]
  const [error, setError] = useState('')

  const {countryName} = useParams()

  const getCountryByName = async() => {
    try {
        const res = await fetch(`${apiURL}/name/${countyrName}`)

        if()
    } catch (error) {
      
    }
  }

  return <div>CountryInfo</div>;
  
};

export default CountryInfo
