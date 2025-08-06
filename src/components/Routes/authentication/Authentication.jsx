
import { AuthenticationContainer } from './authentication.styles';
import SignInForm from '../../sign-in-form/Sign-in-form';
import SignUpForm from "../../Routes/sign-up-form/SignUpForm";
// import SigninForm from "../../Routes/sign-in-form/SignInForm"
const Authentication = ()=>{
 


return(

<AuthenticationContainer>
<SignInForm/>
<SignUpForm/>
</AuthenticationContainer>
)
}


export default Authentication;