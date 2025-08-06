import  "../../components/category/categoryStyle.scss"

const Category = ({Newcategory,onClick}) => {
    
const {imageUrl,title,text} =Newcategory;

  return (
  
<div  className="category-container">
<div  className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>

<div onClick={onClick} className="category-body-container" >
<h2>{title} </h2>
<p>{text}</p>
</div>
</div>

)}
  

   

  export default Category;