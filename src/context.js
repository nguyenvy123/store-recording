import React, { Component } from 'react'
import { storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();
class  ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };
  componentDidMount(){
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts =[];
    storeProducts.forEach((item, i) => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState( () =>{
      return {products: tempProducts}
    });
  }
  handDetail = () => {
    console.log("dadada")
  };
  addToCart = () => {
    console.log("dadaddddddddda")
  };
  render () {
    return (
      <ProductContext.Provider value={{...this.state,
      handDetail: this.handDetail,
      addToCart: this.addToCart}}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
