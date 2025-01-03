import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { signInWithPopup} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
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
  window.location.href = "./loggedin.html";
  const name = "😊"
  localStorage.setItem("name",name);

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
signInWithEmailAndPassword(auth, email, pass)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  alert("Account is being verified....")
  
  localStorage.setItem("name",name);
  localStorage.setItem("mail",email);
  alert("Success !")
  window.location.href = "./loggedin.html";
  
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)
  // ..
});
})
