import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App'



const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user
            const signedInUser = { name: displayName, email, photoURL }
            console.log(result);
            console.log(signedInUser);
            setLogedinUser(signedInUser)
           


            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);


            // ...
        });

    }
    const [logedinUser, setLogedinUser] = useContext(UserContext);
    
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={googleSignIn}> google sign in</button>

        </div>
    );
};

export default Login;