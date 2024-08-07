import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <h1>aaaaa</h1>
            {children}
        </>
    )
}

export default Layout