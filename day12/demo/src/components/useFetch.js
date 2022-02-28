import {useState,useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    // call only once
    useEffect(() => {
      setLoading(true);
      fetch(url).then(res => res.json()).then(data => {
        setData(data)
        setLoading(false);
      });
  
    }, [url])

  return {loading,data};

}

export default useFetch