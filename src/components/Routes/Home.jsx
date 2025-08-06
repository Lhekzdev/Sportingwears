import { Outlet, useNavigate  } from "react-router-dom";
import Directory from "../directory/Directory"

const Home = () => {

  const navigate  =useNavigate()
// 🔽 Handle navigation by id
 


  const categories = [
    {
      "id": 1,
      "title": "Original Jersey",
      "imageUrl": "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1753799019/Chelsea-away-shirt_io4ojt.webp",
      "text": "Shop Now",
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
      "text": "Shop Now",
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
      "text": "Shop Now",
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
      "text": "Shop Now",
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
      "text": "Shop Now",
    },
  ];

   const handleCategoryClick = (id) => {
    if (id === 1) {
      navigate("/shop"); // Customize this route as needed
    }
  };

  return (
    <div>

{/* <Outlet/> */}
    <Directory categories={categories}  onClick={handleCategoryClick}  />
 </div>

  );



};

export default Home;