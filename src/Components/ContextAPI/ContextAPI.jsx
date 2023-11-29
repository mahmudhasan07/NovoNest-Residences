import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../User/Login.config";
import useAxios, { AxiosSecure } from "../Axios/useAxios";

export const Context = createContext()
const ContextAPI = ({ children }) => {
    const [user, setuser] = useState()
    const [loading, setloading] = useState(true)
    const axiosLink = useAxios(AxiosSecure)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const signUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }

    const googleUser = () => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (customer) => {
            setuser(customer)
            const email = customer?.email
            if (email) {
                axiosLink.post(`/jwt`, { email })
                    .then(res => {
                        // console.log("paise",res.data);
                        localStorage.setItem("token", res.data)
                        setloading(false)
                    })
            }
            else{
                localStorage.removeItem('token')
                setloading(false)
            }
            
        })
    }, [auth,axiosLink])


    const data = { signUser, updateUser, logUser, logOut, googleUser, user, loading }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};

export default ContextAPI;