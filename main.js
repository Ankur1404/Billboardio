
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMOvJrfmBVe9rTsE-pYpIDAd2XHG2Z6Po",
    authDomain: "signup-d0e68.firebaseapp.com",
    projectId: "signup-d0e68",
    storageBucket: "signup-d0e68.appspot.com",
    messagingSenderId: "377981320581",
    appId: "1:377981320581:web:8f92d43d84c6c7188298ec"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}


// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "index.html"
            console.log(result)
            
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            document.write("Inavlid credentials")
});
}