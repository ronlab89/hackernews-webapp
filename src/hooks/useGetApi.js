import { useState } from 'react'

export const useGetApi = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);

    const newsGetData = async(framework) => {
        try {
            setLoading(true);
            const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${framework}&page=0`);
            const data = await res.json();
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