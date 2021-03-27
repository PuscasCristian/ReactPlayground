import React, {useState} from 'react';
import SignIn from './comps/SignIn';
import Dashboard from './comps/Dashboard';

import { auth } from './firebase/firebaseInit';


function App() {
const [anonUserLogged, setAnonUserLogged ] = useState(false);

async function signInAnon() {
  auth.signInAnonymously()
  .then(() => {
      console.log('signed in');
      setAnonUserLogged(true);
      console.log(anonUserLogged);
  }).catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
  });
}

async function signOutAnon() {
  auth.signOut().then(() => {
    setAnonUserLogged(false);
    console.log('signed out');
  }).catch((error) => {
    console.log(error);
  })
};


  return (
    <div className="App">
      {anonUserLogged ? <Dashboard handleAuth={signOutAnon} /> : <SignIn handleAuth={signInAnon} height="h-screen" width="w-screen" title='Log in Anonymously' btnMsg='Enter' /> }
    </div>
  );
};

export default App;