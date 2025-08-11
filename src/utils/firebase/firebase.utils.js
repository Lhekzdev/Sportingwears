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
setDoc,
collection,
writeBatch,
query,
getDocs,


} from  "firebase/firestore"


const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
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



// sending data to firestore db
export const addCollectionAndDocument = async(collectionKey,objectsToAdd)=>{
const collectionRef =collection(db,collectionKey)
const batch =writeBatch(db);

objectsToAdd.forEach((object)=>{
const docRef =doc(collectionRef,object.title.toLowerCase());
batch.set(docRef, object)
});
await batch.commit();
console.log('done');


}


export const getCategoryAndDocument = async()=>{
const collectionRef =collection(db,'categories')
const q= query(collectionRef)


const querySnapShot = await getDocs(q);
const categoryMap =querySnapShot.docs.reduce((acc, docSnapshot)=>{
  const {title,items} =querySnapShot.data();
  acc[title.lowerCase()] =items
  return acc;
},{})
return categoryMap
}

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