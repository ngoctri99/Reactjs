import React from 'react'
import Header from './component/header/Header'
import Panner from './component/panner/Panner'
import Product from './component/product/Product'
import Footer from './component/footer/Footer'

function App() {
  const products = [
    {
      id : 1,
      name : 'iphone 11',
      price : '150000',
      hot : true,
      des : 'Đay là iphone 11 '
    },
    {
      id : 2,
      name : 'iphone X',
      price : '130000',
      hot : false,
      des : 'Đay là iphone X '
    },
    {
      id : 3,
      name : 'iphone 8 plus',
      price : '100000',
      hot : false,
      des : 'Đay là iphone 8 plus '
    },
    {
      id : 4,
      name : 'iphone 7 plus',
      price : '90000',
      hot : true,
      des : 'Đay là iphone 7 plus '
    }
  ];

  const element = products.map((product, index) => 
    <Product key={product.id} name = {product.name} price = {product.price} des={product.des} hot={product.hot}/>
  )
  return (
    <div className="App">

      {/* Start header */}
      <Header/>
      {/* End header */}

      {/* Start panner */}
      <Panner/>
      {/* Start panner */}

      {/* Start product */}
      <div className="container">
        <div className="row">
         {element}
        </div>
      </div>
      {/* End product */}

      {/* Start footer */}
      <Footer/>
      {/* End footer */}
    </div>
  );
}

export default App;
