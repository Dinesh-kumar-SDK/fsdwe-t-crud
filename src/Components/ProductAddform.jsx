import { useState } from "react";
import PropTypes from "prop-types";
const ProductAddForm = ({ addProduct }) => {
    const initialState = {
        productName: "",
        image: "",
        price: 0,
        quantity: 0
    }

    const [formState, setformState] = useState(initialState)
    const handleChange = (e) => {
        setformState({
            //load the previous of the state
            ...formState,
            [e.target.name]: e.target.value,
        });
    };
    const handleformSubmit = (e) => {
        e.preventDefault();
        //add product func. here
        addProduct(formState);
        setformState(initialState)
    };

    return (
        <div style={{ padding: 8 }}>
            <form onSubmit={handleformSubmit}>
                <label htmlFor="productName">Name </label>
                <input
                    name="productName"
                    id="productName"
                    value={formState.productName}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <label htmlFor="image">Image </label>
                <input
                    name="image"
                    id="image"
                    onChange={handleChange}
                    value={formState.image}
                    type="url"
                    required />
                <br />
                <br />
                <label htmlFor="price">Price </label>
                <input
                    name="price"
                    id="price"
                    type="number"
                    onChange={handleChange}
                    value={formState.price}
                    required />
                <br />
                <br />
                <label htmlFor="quantity">Quantity </label>
                <input
                    name="quantity"
                    id="quantity"
                    type="number"
                    onChange={handleChange}
                    value={formState.quantity}
                    required />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

ProductAddForm.propTypes = {
    addProduct: PropTypes.func.isRequired,
};
export default ProductAddForm;