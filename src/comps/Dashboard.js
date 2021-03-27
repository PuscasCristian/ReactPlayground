import React from 'react';
import SignIn from './SignIn';

function Dashboard(props) {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen bg-gray-300'> 
            <h2>Welcome, stranger!</h2>
            <SignIn handleAuth={props.handleAuth} height="py-2" width="px-5" title='Sign out' btnMsg='Exit' />
        </div>
    );
}
 
export default Dashboard;