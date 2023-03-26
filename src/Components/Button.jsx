import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center my-5'>
            <button className='text-sm rounded-md hover:bg-slate-800 hover:scale-105 px-5 py-2 bg-slate-700 text-white'>{children}</button>
        </div>
    );
};

export default Button;