import React from "react";
import {BrowserRouter as Router, Routes , Route } from "react-router-dom";
import './App.css';

import Layout from 'components/UI/Layout';

 import Home from 'components/Home';
 import About from 'components/About';



export default function App() {
  return (
    <Router>
      <Layout>
       <Routes>
         <Route component={About} path='/About'/>
         <Route component={Home} path='/'/>
      </Routes>
    </Layout>
   </Router>
  )
}

  
