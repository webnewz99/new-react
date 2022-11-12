import React from 'react';
import './App.css';
import Layout from './../Layout/Layout';
import { Routes , Route  } from 'react-router-dom'
import About from './../About/About';
import Contact from './../Contact/Contact'
import Home from './../Home/Home'


function App() {
    return ( 
<div className = "App" >
<Layout>
<Routes>
    <Route path="/"   element={<Home />} />
    <Route path="biography" element={<About />} />
    <Route path="contact"   element={<Contact />} />
</Routes>
</Layout>
</div>
    );
}

export default App;