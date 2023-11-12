import React, {useState, useEffect} from 'react';
import { apiURL } from '../Utility/api';

const AllCountries = () => {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const getAllCountries = async() => {

        try {
          const res = await fetch('${apiURL}/all'); 
          
            if(!res.ok) throw new error('Oops! Something went wrong!');

            const data = await res.json();

            console.log(data);

            setCountries(data);

            setIsLoading(false);
        } catch (error) {

            setIsLoading(false);
            setError(error.message);
            
        }
    };

    useEffect(() => {
        getAllCountries();
    }, []);

  return <div className='all_country_wrapper'>
      <div className="country_top">
        
      </div>

      <div className="country_bottom">

      </div>
    </div>
  
};

export default AllCountries

