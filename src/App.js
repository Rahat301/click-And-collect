import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/banner/Banner';
import Shop from './components/shop/Shop';

const App = () => {
  return (
    <div style={{width:"90%", margin:"30px auto"}}>
      <Header></Header>
      <Banner></Banner>
      <Shop></Shop>
    </div>
  );
};

export default App;