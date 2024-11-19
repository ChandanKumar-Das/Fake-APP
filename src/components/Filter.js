import { useContext, useState } from "react";
import { productContext } from "../contexts/productcontext";
import { useLocation } from "react-router-dom";

export function Filter (){

    const data = [
        {
            id: 1,
            name:'ALL', 
            value: 'all' 
        },
        {
            id: 2,
            name:'MEN', 
            value:"men's clothing", 
        },
        {
            id: 3,
            name:'WOMEN', 
            value:"women's clothing", 
        },
        {
            id: 4,
            name:'ELECTRONIC', 
            value:"electronics", 
        },
        {
            id: 5,
            name:'JEWELERY', 
            value:"jewelery", 
        }

]

// const [selectedOption, setSelectedOption] = useState('');
 const location =useLocation()
const {fetchData} = useContext(productContext)

function setSelectedOption(value){
if(value === 'all'){
    fetchData('https://fakestoreapi.com/products')
}else{
    fetchData(`https://fakestoreapi.com/products/category/${value}`)
}
    
}

//console.log(location)

    return(
        <>
        <div className="w-full h-[100px] bg-blue-100">
           
           {location.pathname ==='/'  ? <div className="p-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
          Choose an option:
          </label>
          <select
        //   value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
          className="block w-[20%] p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {data.map((item)=>(
                <option key={item.id} value={item.value} >
                  {item.name}
                </option>
            ))}
           
          </select>
      
          </div>:''}


        </div>
        </>
    )
}