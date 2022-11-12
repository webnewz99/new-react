import React from 'react'
import Header from './../header/Header';
import Footer from './../Footer/Footer';

const Layout = ({Children})=> (
    <div>
        <Header />
        {Children}
        <Footer />
    </div>
);
export default Layout;