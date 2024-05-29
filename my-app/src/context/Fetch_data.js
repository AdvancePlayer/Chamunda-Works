import { useState,useEffect } from "react";
import { fetchDataFromApi } from "./API";

const Fetch_data=(endpoint)=>{
    const [data,setData]=useState();
    useEffect(()=>{
        apiCall();
    },[endpoint]);
    const apiCall = async()=>{
        const resp = await fetchDataFromApi(endpoint);
        setData(resp);
    }
    return {data};
};

export default Fetch_data;