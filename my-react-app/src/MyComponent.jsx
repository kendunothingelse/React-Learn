import React, { useState } from "react";
function MyComponent() {
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();
    //The function will update realtime the value "name" in any line conclude it
    function handleNameChange(event) {
        setName(event.target.value);// set name variable to access the event object, then access the target, then get the value
    }
    //number
    function handleQuantityChange(event) {
        let result = event.target.value;
        if (result >= 0) { setQuantity(event.target.value); }

    }
    //text area
    function handleCommentChange(event) {
        setComment(event.target.value)
    }
    //option
    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }
    //radio
    function handleShippingChange(event) {
        setShipping(event.target.value)
    }
    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange}></textarea>
            <p>{comment}</p>
            <select name="" id="" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Home Credit">Home Credit</option>
            </select>
            <p>{payment}</p>
            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange} />
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}
export default MyComponent