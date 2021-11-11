import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useStyles } from "./styles";
export default function Dropdowncart({click}) {
  const classes = useStyles();
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className={classes.container}>
      {cart.length > 0 &&
        cart.map((i, index) => <CartItem key={index} items={i} />)}
      <Link
        className={classes.cartItemContainer}
        style={{ 
            color: "white", 
            textDecoration: "none", 
            display:'flex', 
            justifyContent: 'center', 
            textTransform: 'uppercase',
            fontWeight: 500,
            letterSpacing: '5px' 
        }}
        to="/cart"
        onClick={click}
      >
        Cart Details
      </Link>
    </div>
  );
}
