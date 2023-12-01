import { useState } from 'react';
import { auth } from '../firebase/firebase.Config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

function useSignup() {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const signup = (displayName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                return user
            })
            .then(() => {
                updateProfile({
                    displayName: displayName
                })

                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.errorCode
                const errorMessage = error.message
                setError(errorMessage)
                console.log(errorCode, errorMessage)
            })
    }

    return { user, error, signup }
}

export default useSignup