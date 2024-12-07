import { useState, createContext   } from "react";
import axios from "axios";

export const productContext= createContext()

export function ProductContextProvider({children}){

    const [data , setData]= useState([])
    const [lading, setLoading] = useState(false)
    const[serchtext, setSerchText] =useState('')


//console.log('data',data)
   
    //const filterData = data.filter((value)=>value.description.toLowerCase().include(serchtext.toLowerCase()))
    const filterData = data.filter((value) => value.description.toLowerCase().includes(serchtext.toLowerCase()))


console.log('filterData',filterData)
    const fetchData = async (url) => {
        setLoading(true)
        //const url = 'https://fakestoreapi.com/products'
        try{
            const responce = await axios.get(url)
            //console.log(responce) 
            setData(responce.data)
            setLoading(false) 
            console.log(data)
            }

        catch(error){
              console.log(error)
              setLoading(true)
            }

        }


   

    const values ={
        data,
        lading,
        fetchData,
        filterData,
        serchtext,
        setSerchText
    }
    return(
        <>
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
        </>
    )

 }

