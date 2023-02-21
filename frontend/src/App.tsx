import React from 'react';
import './App.css';
import MainLayout from './Layouts/MainLayout';
import HomeScreen from './screens/HomeScreen';
import {Routes,Route} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route element={<HomeScreen/>} path='/' />
        <Route element={<ProductScreen/>} path='/product/:id' />
      </Routes>
    </MainLayout>
  );
}

export default App;
