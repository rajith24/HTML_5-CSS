import React from 'react';
import product from './ProductData'
import classes from './App.module.css'
import sql from './pgsql'

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
        {/* <div className={classes.FeatureData}>
          <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
        </div> */}
        <div className={classes.HeartData}>
          <i class="fas fa-heartbeat"></i>
          <p>78</p>
         </div>
      </div>
      <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>
          {product.title}
        </h1>
        <p className={classes.ProductDescription}>{product.description}</p>
        <h3 className={classes.SectionHeading}> Select Color</h3>
        <div>
          <img className={[classes.ProductImage, classes.SelectedProductImage].join(" ")} src={product.colorOptions[0].imageUrl} alt="Black Coloured Watch"/>
          <img className={classes.ProductImage} src={product.colorOptions[1].imageUrl} alt="Red Coloured Watch"/>
          <img className={classes.ProductImage} src={product.colorOptions[2].imageUrl} alt="Blue Coloured Watch"/>
          <img className={classes.ProductImage} src={product.colorOptions[3].imageUrl} alt="Purple Coloured Watch"/>
        </div>
        <h3 className={classes.SectionHeading}> Features</h3>
        <div>
          <button className={[classes.FeatureItem , classes.SelectedFeatureItem].join(" ")}>Time</button>
          <button className={classes.FeatureItem}>Heart Rate</button>
        </div>
        <button className={classes.PrimaryButton}>Buy Now</button>
        sql
      </div>

    </div>


    </div>


  );
}

export default App;
