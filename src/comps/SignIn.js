import React from 'react';
import { auth } from '../firebase/firebaseInit';

async function signInAnon() {
    auth.signInAnonymously()
    .then(() => {
        console.log('signed in');
    }).catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
    });
}

function SignIn(props) {
    return (
        <div className="flex flex-row h-screen w-screen justify-center items-center bg-gray-200">
            <div className="flex flex-col p-10 shadow-2xl bg-gray-100">
                <h2>Log in Anonymously</h2>
                <button className="mt-3 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" 
                    onClick={signInAnon}
                >Enter</button>
            </div>
        </div>
    );
}


export default SignIn;