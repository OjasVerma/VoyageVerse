  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  import { signInWithPopup} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
//   import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAtc4ZA66GH-gAFy9Ou4cZBO_hELUBooNs",
    authDomain: "voyageverse-78bdb.firebaseapp.com",
    projectId: "voyageverse-78bdb",
    storageBucket: "voyageverse-78bdb.firebasestorage.app",
    messagingSenderId: "925862347993",
    appId: "1:925862347993:web:5f83cdda7fbb499cd62ac8",
    measurementId: "G-XM1JRCLWDR"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();
  const googleLogin = document.getElementById("google_auth");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.href = "./sign-in.html";
    // const user_name = user.name;
    console.log(user.displayName);
    document.getElementById("Auth_Name").value = user.email;
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
})

const submit = document.getElementById("form_submit");
submit.addEventListener("click", function(event){
  event.preventDefault()
  const email = document.getElementById("email_input").value;
  const pass = document.getElementById("pass_input").value;
  const name = document.getElementById("name_input").value;
  const auth = getAuth(app);
  auth.languageCode = 'en';
  // const provider = new GoogleAuthProvider();
  createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account is being made....")
    window.location.href= "./sign-in.html";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})
import {setPersistence,browserSessionPersistence } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
