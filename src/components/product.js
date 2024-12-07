
import { useEffect,useContext } from "react"
import { Productcads } from "./cards/prdouctCard";
import { productContext } from "../contexts/productcontext";
import { useNavigate } from "react-router-dom";
import { ProductLoader } from "./loaders/productloader";
export function Product (){


    const {lading, fetchData,filterData} = useContext(productContext)

    
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
          ) : !filterData.length ? (<div>No data Found</div>) :
            (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filterData.map((value, index) => (
                
                <div key={index} onClick={()=>handleNavigationClick(value)}>
                  <Productcads props={value} />
                </div>
              ))}
            </div>
          )}
        </div>
      </>
      
      
    )
}