import React from 'react';

const ProductPreview = (props) => {

    return (
        <div>
        <img src={product.colorOptions[0].imageUrl} alt="Product Previews" />
        {/* <div className={classes.FeatureData}>
          <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
        </div> */}
        <div className={classes.HeartData}>
          <i class="fas fa-heartbeat"></i>
          <p>78</p>
         </div>
        </div>

    );

}

export default ProductPreview;