import Category from "../category/Category";
import "./directoryStyles.scss"
const Directory =({categories, onClick}) =>{
    return(

<div  className="directory-container">
    {categories.map((categoryLog)=>
      (
        
<Category
key={categoryLog.id}
Newcategory ={categoryLog}
onClick={()=>onClick(categoryLog.id)}
/>)

    )}
</div>
    )
}

export default Directory;