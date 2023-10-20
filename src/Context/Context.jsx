import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase.config";
import React from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);


const Context = ({children}) => {
    const [user , setUser] = useState(null)

    

    const EmailSignUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

    const EmailSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

    const profile = (displayName) => {
		return updateProfile(auth.currentUser, {
			displayName: displayName,
		});
	};


    const provider = new GoogleAuthProvider();

	const GoogleSignIn = () => {
		return signInWithPopup(auth, provider);
	};

    
	const logOut = () => {
		return signOut(auth);
	};


    useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
			setUser(CurrentUser);
            console.log(CurrentUser);
            // setLoading(false)

		});
		return () => unSubscribe();
	}, []);


    const obj = {
        user , EmailSignUp , profile ,EmailSignIn ,GoogleSignIn , logOut
	};

    return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
};

export default Context;