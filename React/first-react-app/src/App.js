import React from 'react';
import product from './ProductData'
import classes from './App.module.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
            <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="Amazon Logo"/>
        </nav>
      </header>

    <div className={classes.MainContainer}>
      <div className={classes.ProductPreview}>
        <img src={product.colorOptions[0].imageUrl} alt="Product Previews" />
      </div>
      <div className={classes.ProductData}>
        <h1>
          {product.title}
        </h1>
      </div>
    </div>


    </div>


  );
}

export default App;
