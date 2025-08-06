import { initializeApp } from "firebase/app"
import {
    getAuth,
    signOut,
    onAuthStateChanged ,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"

import {
getFirestore,
doc,
getDoc,
setDoc


} from  "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC2K9TnyOcgqvdnkyAQ34miM9D5yeCW7xY",
    authDomain: "lhekz-db.firebaseapp.com",
    projectId: "lhekz-db",
    storageBucket: "lhekz-db.firebasestorage.app",
    messagingSenderId: "740304537305",
    appId: "1:740304537305:web:a3cf426143dd603dbde0c8"
};

// Initialize Firebase

const firebaseapp = initializeApp(firebaseConfig);


const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt: "select_account"

});



export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
if (!email || !password) return;
return await signInWithEmailAndPassword(auth, email,password)

}
  

export const auth = getAuth()


export const signInWithGooglePopup = () => signInWithPopup (auth, googleprovider);

export const signInWithGoogleRedirect =()=>signInWithRedirect(auth, googleprovider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, "user",userAuth.uid );

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
//   if user exists  
if (!userSnapshot.exists()){
const {displayName, email}  =userAuth;
const createdAt = new Date()


try{
  await  setDoc  (userDocRef ,{
displayName,
email,
createdAt,
...additionalInformation

  });
} catch(error){
    console.log("error creating the user", error.message);
    
}
}

return userDocRef;
// user doesnot exist


}

export const createAuthUserWithEmailAndPassword =async (email,password) => {
   if (!email || !password)return;
   
  return await  createUserWithEmailAndPassword (auth, email, password)
}

export const signOutUser=async ()=>await signOut(auth)

export const onAuthStateChangedListener =(callback)=>onAuthStateChanged (auth,callback )