import { useState,useContext  } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
// import "../sign-up-form/form-input.styles.scss"
import FormInput from "../form-Input/FormInput";
import '../sign-up-form/signUp.scss'
import Button from '../../button/Button'
import { UserContext } from "../../../contexts/user.context";

const defaultFormfields = {


    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormfields)
    const { displayName, email, password, confirmPassword } = formFields
    // console.log(formFields);
    const val = useContext(UserContext)
    console.log('OKAY');

const {setcurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormfields)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }



    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })
            setcurrentUser(user)
             console.log ("User Created:", (user));
            resetFormFields();


        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("cannot create user, email already in use")
            } else {
                console.log("user creation encountered an error", error);
            }
        }
    };



    return (
        <div className="sign-up-container">
            <h1>Dont have an account? </h1>
            <span>Sign up with your email and password</span>
            <form className="form-input" onSubmit={handleSubmit}>

           

                <FormInput
                    label="Display Name"
                    type="text" required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />

                <FormInput
                    label="email"
                    type="email" required
                    onChange={handleChange}
                    name="email"
                     value={email} />

                <FormInput
                    label="password"
                    type="password" required
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <FormInput
                    label="confirmPassword"
                    type="password" required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} />
                <Button buttonType="inverter">Submit</Button>

            </form>
        </div>
    )
}

export default SignUpForm

 {/* <FormInput
                    label="Display Name"
                  inputoptions={ { 
                    type:"text", required:'true',
                    onChange:handleChange,
                    name:"displayName",
                    value:displayName,}} /> */}