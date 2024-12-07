
export function Productcads ({props}) {
    
      return(
        <>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 m-4">
      <img 
         
        className="w-full h-64 object-cover"
        src={props.image}
        alt={props.title}
      />
      <div className="p-6">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full mb-3 uppercase font-bold">
          {props.category}
        </span>
        <h2 className="text-2xl font-semibold mb-3 text-gray-800 truncate">
          {props.title}
        </h2>
        <p className="text-gray-600 text-sm mb-5 truncate">
          {props.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ${props.price}
          </span>
          <span className="flex items-center text-yellow-500">
            ⭐ {props.rating.rate} 
            <span className="text-gray-500 ml-1">({props.rating.count} reviews)</span>
          </span>
        </div>
        {/* <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg">
          Add to Cart
        </button> */}
      </div>
    </div>
        </>
      )
}