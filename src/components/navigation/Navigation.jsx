import "../../components/navigation/navigation.styles.scss"
import { Fragment, useContext } from "react";
import { DropContext } from "../../contexts/Drop.down.context";
import Cartcomponent from "../cart-icon/cart-icon.component";
import Cartdropdown from "../cart-dropdown/Cartdropdown";
// import { DropProv } from "../../contexts/dropdown.context";
import CartIconComponent from "../cart-icon/cart-icon.component";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg"
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink

} from '../navigation/Navigation.styles'

import { UserContext } from "../../contexts/user.context";
const Navigation = () => {

  const { currentUser,setCurrentUser } = useContext(UserContext)
const {show} =useContext(DropContext)

  const signOutHandler = async () => {
    const res = await signOutUser()
   setCurrentUser(null);
    console.log(res);

  }

//   console.log(currentUser);

// const toggleFunction =()=>{
//   setShow(prev =>!prev);
// }

  return (
    < Fragment>

      <  NavigationContainer>

        <LogoContainer to='/'>
          <  Crownlogo className='logo' />
        </LogoContainer>

        <NavLinks>
          {currentUser ? (
            <span onClick={signOutHandler} className="nav-link">SIGN OUT</span>
          ) : (
            <Link className="nav-link" to='/authentication'>
              SIGN IN
            </Link>
          )}

          <NavLink className="nav-link" to="./shop"> shop   </NavLink>
<Cartcomponent  />

        </NavLinks>


{show && <Cartdropdown />}

    
      </NavigationContainer>
    

      <Outlet />

    </Fragment>
  )
}


export default Navigation;