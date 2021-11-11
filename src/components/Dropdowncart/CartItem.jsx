import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import {getProductById} from './../../api/api';
export default function CartItem({items, cartDetails}) {
    const classes = useStyles({cartDetails});
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchItems = async() => {
           if(items.productId !== undefined){
                const res = await getProductById(items.productId);
                if(res.status === 200){
                    setProduct(res.data);
                }
           }
        }
        fetchItems();
    },[items.productId])
    if(!product) return null;
    return (
        <div className={classes.cartItemContainer}>
            <div className={classes.leftSide}>
                <img src={product.image}  className={classes.image} alt={product.title} />
                <div className={classes.info}>
                    <span>{product.title.substring(0, 8)}</span>
                    <span>$ {product.price}</span>
                </div>
            </div>
            {cartDetails
            ? <div className={classes.cartDetails}>
               <span> x {items.quantity}</span>
               <span>$ {items.quantity * product.price}</span>
            </div>
            :<div>
                x {items.quantity}
            </div>}
        </div>
    )
}
