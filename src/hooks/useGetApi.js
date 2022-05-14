import { useState, useEffect } from 'react'

export const useGetApi = (frameworkValue) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);

    // Get API
    useEffect(() => {
        if(frameworkValue) {
            newsGetData(frameworkValue);
        }
    }, [frameworkValue])

    const newsGetData = async(frameworkValue) => {
        setLoading(true);
        try {
            const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${frameworkValue}&page=0`);
            const data = await res.json();
            console.log(data.hits)
            setData(data.hits);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }finally {
            setLoading(false);
        }
    }

  return {data, error, loading, newsGetData}
}