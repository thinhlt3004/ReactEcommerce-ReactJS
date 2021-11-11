import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../redux/productSlide";
import { Box  } from "@material-ui/core";
import {Skeleton} from '@material-ui/lab';
import { useStyles } from "./styles";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Content({ cate }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {products, isFetching} = useSelector((state) => state.product);
  const arr = [1,2,3,4,5,6,7,8];
  const [sort, setSort] = useState("ASC");
  useEffect(() => {
    if (cate !== undefined) {
        const payload = {
            cate: cate,
            direction: 'ASC',
        }
      dispatch(getProductByCategory(payload));
    }
  }, [dispatch, cate]);

  const handleChange = (e) => {
    const payload = {
        cate: cate,
        direction: e.target.value,
    }
    dispatch(getProductByCategory(payload));
    setSort(e.target.value);
  }
  return (
    <Box className={classes.container}>
      <Box className={classes.filterContainer}>
          <h1 className={classes.titleFilter}>{cate}</h1>
          <Box className={classes.filterSelect}>
              <span className={classes.contextFilter}>Sort Products: </span>
              <select value={sort} onChange={handleChange} className={classes.optFilter}>
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
              </select>
          </Box>
      </Box>     
      <Box className={classes.productContainer}>
        {isFetching === false && products.length > 0
        ? products.map((i, index) => (
            <Box key={index} className={classes.imgContainer}>
              <img src={i.image} className={classes.img} alt={i.id} />
              <Box className={classes.info}>
                <Box className={classes.icon}>
                  <ShoppingCartOutlined />
                </Box>
                <Box className={classes.icon}>
                  <Link style={{ textDecoration: 'none', color: 'black'}} to={`/${cate}/product/${i.id}`}>
                    <SearchOutlined />
                  </Link>
                </Box>
              </Box>
            </Box>
          ))
        :
         <Box className={classes.productContainer}>
            {arr.map((i, index) => (
                <Skeleton className={classes.imgContainer} key={index} style={{backgroundColor: "rgba(0,0,0, 0.2)"}} animation="wave" variant="rect" width={405} height={270} />
            ))}
        </Box>
        }
      </Box>
    </Box>
  );
}
