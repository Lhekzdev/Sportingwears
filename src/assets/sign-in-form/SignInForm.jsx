import { useState } from "react"
import { getRedirectResult } from "firebase/auth";
 import { auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
  } from "../../utils/firebase/firebase.utils";


const SignIn = ()=>{
useEffect(async () => {
const response = await getRedirectResult(auth);
console.log(response);
}, [])

const logGoogleUser =async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
}

return(
<div>

    <h1>Sin In Page</h1>
    <button > Sign In with Google popUp  </button>
    <button > Sign In with Google popUp  </button>

 
</div>

)

}

export default SignIn 