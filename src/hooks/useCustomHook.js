import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState (null);
    const [loading,setLoading] = useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                setLoading(true);
                setError(null);
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error (`Error${response.status}:${response.statusText}`);
                }

                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error("La respuesta no es JSON");
                }
                const result = await response.json();
                setData(result);               
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    },[url]);
    return {data,loading,error};
}

export default useFetch;