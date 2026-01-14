import React from "react";

function Product({ productName, price }) {
  // const { productName, price } = props;
  return (
    <div>
      <div>
        <div>Ürün Adı:{productName}</div>
        <div>ürün Fiyat: {price}</div>
      </div>
      {/* <hr /> */}
      <div>
        <div>Ürün Adı:Ayakkabı</div>
        <div>ürün Fiyat: 2550</div>
      </div>
    </div>
  );
}

export default Product;
