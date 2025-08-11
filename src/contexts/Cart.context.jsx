
import {createContext, useState ,useEffect} from 'react'

import SHOP_DATA from '../SHOP_DATA';
import { addCollectionAndDocument } from '../utils/firebase/firebase.utils';





export const UsershopContext = createContext({ tests: [],} );


export const Shopcontext =({children})=>{

const [ tests,setProducts] =useState([])

useEffect(()=>{
  addCollectionAndDocument  ('categories',SHOP_DATA)
})

const value = {tests};

return(
<div>
<UsershopContext.Provider value={value}> 
    {children}
    </UsershopContext.Provider>
</div>

)

}
