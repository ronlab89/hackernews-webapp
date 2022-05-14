import { useState, useEffect } from 'react'

export const useGetApi = (frameworkValue) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const [blocks, setBlocks] = useState(1);

    //More News
    const handleMore = async () => {
        setLoading(true);
        try {
            const res = await newsGetData(frameworkValue, blocks + 1)
            const moreNews = res.json()
            setBlocks(prev => prev + 1)
            setData(prev => [...prev, moreNews])
        } catch (error) {
            console.log(error);
        }finally {
            setLoading(false);
        }
    }

    //Fetch API
    const newsGetData = async (frameworkValue, page) => {
        setLoading(true);
        try {
            const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${frameworkValue}&page=${page}`);
            const data = await res.json();
            setData(data.hits);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }finally {
            setLoading(false);
        }
    }

    // Get API
    useEffect(() => {
        if(frameworkValue) {
           newsGetData(frameworkValue, 0);
        }
    }, [frameworkValue])


  return {data, error, loading, newsGetData, handleMore}
}