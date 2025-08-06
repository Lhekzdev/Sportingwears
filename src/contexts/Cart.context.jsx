
import {createContext, useState } from 'react'

import latestProducts from '../shop-data.json'






export const UsershopContext = createContext({ tests: [],} );


export const Shopcontext =({children})=>{

const [ tests,setProducts] =useState(latestProducts)
const value = {tests};

return(
<div>
<UsershopContext.Provider value={value}> 
    {children}
    </UsershopContext.Provider>
</div>

)

}
