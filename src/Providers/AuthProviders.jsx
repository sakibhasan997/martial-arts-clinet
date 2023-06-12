import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // Google
    const gProvider = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // GitHub
    const gitProvider = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Register
    const createRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const createLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }



    // LogOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);

            // token get and post 
            if (loggedUser) {
                axios.post('https://martial-arts-server.vercel.app/jwt', { email: loggedUser.email })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        gProvider,
        gitProvider,
        createRegister,
        createLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;