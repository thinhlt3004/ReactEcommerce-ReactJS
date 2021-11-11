import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {useStyles} from './styles';
import CartItem from './../../components/Dropdowncart/CartItem';
import { Button } from '@material-ui/core';
import {getProductById} from './../../api/api';
export default function Cart() {
    const classes = useStyles();
    const {cart} = useSelector(state => state.cart);
    const [subtotal, setSubtotal] = useState(0);
    useEffect(() => {
      const fetchData = async () => {
        if(cart.length > 0) {
            let subtotal = 0;
            for(let i of cart) {
                const res = await getProductById(i.productId);
                subtotal += res.data.price * i.quantity;
            }
            setSubtotal(subtotal);
        }
      }
      fetchData();
    },[cart])
    return (
        <div className={classes.container}>
            <div className={classes.left}>
                {cart.length > 0  && cart.map((i, index) => (
                    <CartItem items={i} key={index} cartDetails/>
                ))}
            </div>
            <div className={classes.right}>
                <p className={classes.title}>Order Summary</p>
                <div className={classes.bill}>
                    <span>Subtotal </span>
                    <span> $ {subtotal}</span>
                </div>
                <div className={classes.bill}>
                    <span>Estimated Shipping</span> 
                    <span> $ 5,9</span>
                </div>
                <div className={classes.bill}>
                    <span>Shipping Discount</span> 
                    <span> $ 5,9</span>
                </div>
                <div className={classes.billTotal}>
                    <span>Total </span>
                    <span> $ {subtotal}</span>
                </div>
                <div className={classes.buttonDiv}>
                    <Button className={classes.button}>CHECK OUT NOW</Button>
                </div>
            </div>
        </div>
    )
}
