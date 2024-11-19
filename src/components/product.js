import axios from "axios"
import { useEffect, useState,useCallback, useContext } from "react"
import { Productcads } from "./cards/prdouctCard";
import { productContext } from "../contexts/productcontext";
import { useNavigate } from "react-router-dom";
import { ProductLoader } from "./loaders/productloader";
export function Product (){


    const { data, lading, fetchData} = useContext(productContext)

    const navigate = useNavigate()

    function handleNavigationClick(value){
        navigate(`/details/${value.id}`)
    }

    useEffect(()=>{
        fetchData('https://fakestoreapi.com/products')
    },[])


    return(
        <>
        <div className="max-w-[90%] mx-auto">
          {lading ? (
            <div className="flex justify-center items-center h-[50vh]">
              <ProductLoader />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((value, index) => (
                <div key={index} >
                  <Productcads props={value} handleNavigationClick={handleNavigationClick} />
                </div>
              ))}
            </div>
          )}
        </div>
      </>
      
      
    )
}