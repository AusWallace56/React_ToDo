import React, {useContext, useState, useEffect} from "react";
import { auth } from "../base";

import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState();

    const gitHubProvider = new GithubAuthProvider();

    async function login(){
        signInWithPopup(auth, gitHubProvider).then(authData => {
            console.log(authData);
            setCurrentUser(authData.user)
        })
    }

    async function logout(){
        signOut(auth).then(setCurrentUser(null))
    }

    const value = {currentUser, login, logout}

    useEffect(() => {
        const authChange = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return authChange;
    }, []);

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
