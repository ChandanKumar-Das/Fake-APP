import { useContext } from "react";
import { productContext } from "../contexts/productcontext";
import { useLocation } from "react-router-dom";

export function Filter (){

    const data = [
        {
            id: 1,
            name:'ALL', 
            category: 'all' 
        },
        {
            id: 2,
            name:'MEN', 
            category:"men's clothing", 
        },
        {
            id: 3,
            name:'WOMEN', 
            category:"women's clothing", 
        },
        {
            id: 4,
            name:'ELECTRONIC', 
            category:"electronics", 
        },
        {
            id: 5,
            name:'JEWELERY', 
            category:"jewelery", 
        }

]

// const [selectedOption, setSelectedOption] = useState('');
 const location =useLocation()
const {fetchData,serchtext,setSerchText} = useContext(productContext)

function setSelectedOption(value){
if(value === 'all'){
    fetchData('https://fakestoreapi.com/products')
}else{
    fetchData(`https://fakestoreapi.com/products/category/${value}`)
}
    
}

console.log('---------',data)

    return(
        <>
        <div className="w-full h-[100px] bg-blue-100">
            <div className="grid grid-cols-3">
           {location.pathname ==='/'  ? <div className="p-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
          Filter By category:
          </label>
          <select
        //   value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
          className="block w-[50%] uppercase p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {data.map((item)=>(
                <option key={item.id} value={item.category} >
                  {item.category}
                </option>
            ))}
             {/* {['all',...Array.from(new Set(data.map((item) => item.category)))].map(
                (category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              )} */}
          </select>
      
          </div>:''}

         {location.pathname ==='/' &&  <div className="flex p-4 justify-center items-center">
            <label className="block mb-2 text-sm font-medium text-gray-700">
                Serch text 
            <input
            className=" w-[150%] p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={serchtext}
            onChange={(e)=>setSerchText(e.target.value)}
            placeholder="serch Please"
            />
            </label>
        </div>}

        </div>
        </div>
        </>
    )
}