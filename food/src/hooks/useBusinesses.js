import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const search = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'Chicago',
                }
            });

            setError("");
            setResults(response.data.businesses);
        } catch(err) {
            setError("Error connecting to the server");
            console.log('err:', err)
        }
    }

    useEffect(() => {
        search(''); 
     }, []);

     return [search, results, error]
};