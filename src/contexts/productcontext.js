import { useState,useEffect,useCallback, createContext   } from "react";
import axios from "axios";

export const productContext= createContext()

export function ProductContextProvider({children}){

    const [data , setData]= useState([])
      
    const [lading, setLoading] = useState(false)


    const fetchData = useCallback(async (url) => {
        setLoading(true)
        //  const url = 'https://fakestoreapi.com/products'
        try{
            const responce = await axios.get(url)
            //console.log(responce) 
            setData(responce.data)
            setLoading(false) 
            console.log(data)
            }catch(error){
              console.log(error)
              setLoading(true)
            }
      }, [data]);

   

    const values ={
        data,
        lading,
        fetchData
    }
    return(
        <>
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
        </>
    )

 }

