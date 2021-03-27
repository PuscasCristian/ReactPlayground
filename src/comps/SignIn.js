import React from 'react';


function SignIn(props) {
    return (
        <div className={`flex flex-row ${props.height} ${props.width} justify-center items-center bg-gray-200`}>
            <div className="flex flex-col p-10 shadow-2xl bg-gray-100">
                <h2>{props.title}</h2>
                <button className="mt-3 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" 
                    onClick={props.handleAuth}
                >{props.btnMsg}</button>
            </div>
        </div>
    );
}


export default SignIn;