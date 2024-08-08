import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <h1> </h1>
            {children}
        </>
    )
}

export default Layout