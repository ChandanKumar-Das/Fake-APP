

import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import { Filter } from '../components/Filter';
import { ProductContextProvider } from '../contexts/productcontext';

export function Details() {
  const  {id}  = useParams();
  //const  {pathname}  = useLocation() 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

//  console.log(id)
//  console.log(pathname)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);





  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  const { title, description, price, category, image, rating } = product;

  return (
    <>
    <ProductContextProvider>
    <Navbar/>
    <Filter/>
    </ProductContextProvider>
  
    <div className="max-w-3xl mx-auto p-5">
      
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
        <div onMouseOver={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className="flex justify-center items-center">
          <img src={image} alt={title} className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>

        {show ? <div  className="w-full">
        <img src={image} alt={title} className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>:''}

        <div>
          <h2 className="text-2xl font-semibold mb-3">{title}</h2>
          <p className="text-gray-600 mb-5">{description}</p>
          <p className="text-lg font-medium text-gray-800 mb-2">Category: {category}</p>
          <p className="text-xl font-bold text-green-600 mb-2">${price}</p>
          <div className="flex items-center mb-3">
            <span className="text-yellow-500 text-lg">⭐ {rating.rate}</span>
            <span className="text-gray-500 ml-2">({rating.count} reviews)</span>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
