import { Filter } from "../components/Filter"
import { Navbar } from "../components/Navbar"
import { Product } from "../components/product"
import { ProductContextProvider } from "../contexts/productcontext"

export const Index = ()=> {
    return(
    <> 
    <Navbar/>
    <ProductContextProvider>
    <Filter/>
    <Product/>
    </ProductContextProvider>
    </>
    )
    
}

