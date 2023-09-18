import React from 'react'

export const AuthTemplate = ({ children }) => {
    return (
        <main className='h-screen flex justify-center items-center'>
            <div className='w-[320px]'>{children}</div>
        </main>
    )
}
