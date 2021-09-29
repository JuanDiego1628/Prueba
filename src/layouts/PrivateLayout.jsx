import React from 'react'
import Sidebar from '../components/Sidebar'

const PrivateLayout = ({children}) => {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar/>
            <main className="flex w-full bg-blue-500">{children}</main>
            
        </div>
    )
}

export default PrivateLayout