import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useStyles} from './styles';
import CartItem from './../../components/Dropdowncart/CartItem';
import { Button } from '@material-ui/core';
import {getProductById} from './../../api/api';
import {deleteCart} from './../../redux/cartSlide';
export default function Cart() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart);
    const [subtotal, setSubtotal] = useState(0);
    useEffect(() => {
      const fetchData = async () => {
        if(cart?.products?.length > 0) {
            let subtotal = 0;
            for(let i of cart?.products) {
                const res = await getProductById(i.productId);
                subtotal += res.data.price * i.quantity;
            }
            setSubtotal(subtotal);
        }else{
            setSubtotal(0);
        }
      }
      fetchData();
    },[cart])

    const handleDelete = () => {
        dispatch(deleteCart(cart.id));
    }
    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.btnDiv}>
                    <Button onClick={handleDelete} className={classes.buttonDelete}>Delete Cart</Button>
                </div>
                {cart?.products?.length > 0  
                ? cart?.products?.map((i, index) => (
                    <CartItem items={i} key={index} cartDetails/>
                )) 
                : <p className={classes.empty}>Your cart is empty</p>
                }
            </div>
            <div className={classes.right}>
                <p className={classes.title}>Order Summary</p>
                <div className={classes.bill}>
                    <span>Subtotal </span>
                    <span> $ {subtotal || 0}</span>
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
                    <span> $ {subtotal || 0}</span>
                </div>
                <div className={classes.buttonDiv}>
                    <Button className={classes.button}>CHECK OUT NOW</Button>
                </div>
            </div>
        </div>
    )
}
