import React from 'react';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <header>header</header>
            <main>{children}</main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;