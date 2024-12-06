import { useState } from 'react';
import { v4 } from 'uuid';
import './App.css'
import ProductAddForm from './Components/ProductAddform';
import Product from './Components/Product';
const initialProducts = [{ productName: "Iphone", image: "https://img.freepik.com/free-psd/iphone-15-pro-mockup-front-back-view_1332-60588.jpg?semt=ais_hybrid", price: "20", quantity: "9", id: "65c8e0b2-a4e4-47fd-bcb3-99ec29f815ac" }, { productName: "Motorola", image: "https://img.freepik.com/premium-photo/realistic-front-view-mockup-mobile-phone_1272625-4578.jpg?ga=GA1.1.1042690617.1728704420&semt=ais_hybrid", price: "17", quantity: "13", id: "cb4112bb-d195-434c-a918-89dc2652862e" }, { productName: "Laptop", image: "https://img.freepik.com/free-photo/person-working-laptop-desk_9975-24478.jpg", price: "26", quantity: "12", id: "fbc02e46-96e9-4182-b12d-677f18d8a600" }, { productName: "Laptop", image: "https://img.freepik.com/premium-psd/realistic-premium-15-inch-notebook-pro-web-ui-application-photoshop-mock-up-front-view_39605-171.jpg", price: "26", quantity: "11", id: "f90e589e-882e-494a-9bf6-acf8bb970bb2" }]
function App() {
  //State variable Array of Products
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (formDetails) => {
    const product = {
      ...formDetails,
      id: v4(),
    };
    //creating a new array of products with the new product
    const newProducts = [...products, product];
    console.log(JSON.stringify(newProducts));
    // //changing the state variable
    setProducts(newProducts);
  };
  const deleteProduct = (pdId) => {
    //delete the product with pdId from the list
    const newProducts = products.filter((product) => product.id !== pdId)
    console.log(newProducts);
    setProducts(newProducts)
  }

  return (
    <>
      <h1>CRUD Implementation Comisng Soon</h1>
      <ProductAddForm addProduct={addProduct} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* {products.map((pd) => (
          <Product
            key={pd.id}
            productName={pd.productName}
            image={pd.image}
            quantity={pd.quantity}
            price={pd.price}
          /> */}
        {products.map((pd) => (
          //spread the components from pd to product components
          <Product key={pd.id} {...pd} isStar={true} deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </>
  );
};

export default App;
