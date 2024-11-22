import { Banner } from "../components/Banner"
import { Filter } from "../components/Filter"
import { Navbar } from "../components/Navbar"
import { Product } from "../components/product"
import { ProductContextProvider } from "../contexts/productcontext"

export const Index = ()=> {
    return(
    <> 
    <Navbar/>
    <Banner/>
    <ProductContextProvider>
    <Filter/>
    <Product/>
    </ProductContextProvider>
    </>
    )
    
}

