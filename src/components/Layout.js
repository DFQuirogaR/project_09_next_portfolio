import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Nprogress from 'nprogress';
import nProgress from 'nprogress';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types'

const Layout = ({ children, footer = true }) => {

    const router = useRouter();

    useEffect(() => {

        // Efecto para manejar cambios de ruta
        const handleRouteChange = (url) => {
            Nprogress.start();
        };

        // Escucha el inicio de cambio de ruta
        router.events.on("routeChangeStart", handleRouteChange);

        // Escucha el final exitoso de cambio de ruta
        router.events.on("routeChangeComplete", () => Nprogress.done());

        // Escucha el error en el cambio de ruta
        router.events.on("routeChangeError", () => nProgress.done());

        return () => {
            // limpia el event listener al desmontar el componente
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);


    return (
        <>
            <Navbar />
            <h1></h1>
            {children}
            {footer && (
                <footer className='bg-dark text-light text-center'>
                    <div className='continer p-4'>
                        <h1>&copy: Diego Fernando Quiroga Rivera Portfolio</h1>
                        <p>2024 - {new Date().getFullYear()}</p>
                        <p>All rights Reserved.</p>
                    </div>
                </footer>
            )}
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node,
    footer: PropTypes.bool
};

export default Layout;