import { auth } from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUsr)=>{
            setUser(currentUsr)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])
    console.log(user);
    return(
        <userContext.Provider value={{createUser, signIn, logOut, user}}>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(userContext)
}