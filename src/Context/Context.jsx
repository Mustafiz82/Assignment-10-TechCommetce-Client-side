import { createContext, useState } from "react";
import { app } from "../../Firebase.config";
import React from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";


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


    const obj = {
        user , EmailSignUp , profile ,EmailSignIn
	};

    return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
};

export default Context;