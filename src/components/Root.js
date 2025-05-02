import React, { Component } from 'react';
import App from './App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NavigationBar from './NavigationBar';
import Blog from '../pages/Blog';
import BlogPsot from '../pages/BlogPsot';
import Notfound from '../pages/Notfound';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

export default function Root() {
  
    const routers = [
        {path: '/', name:'Home', element: <App />, exact: true},
        {path: '/about', name:'About' ,element: <About />, exact: true },
        {path: '/contact', name:'Contact', element: <Contact />, exact: true },
        {path: '/blog', name:'Blog' ,element: <Blog />, exact: true },
        {path: '/blog/:id', name:'BlogPost' ,element: <BlogPsot />, exact: true },
        {path: '*', name:'NotFound' ,element: <Notfound />, exact: true },
        {path: '/reddit', name:'Reddit' ,element: <h1>Reddit</h1>, exact: true },
    ]
    return (
    <Router>    
      <div className='todo-app-container'>
        <NavigationBar />
        <div className='content'>
          <Routes>
            {routers.map(({path, element, exact})=>(
                <Route key={path} path={path} element={element} exact={exact} />
            ))}
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/" element={<App />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPsot />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
