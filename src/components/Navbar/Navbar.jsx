import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import {
  Box,
  Avatar,
  Badge,
  Button,
  Dialog,
  Slide,
  CircularProgress,
} from "@material-ui/core";
import { getAllCategories } from "../../api/api";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, getUser, getUsers } from "./../../redux/userSlide";
import {registerUser} from './../../api/api';
import { getCartByUserID, logOutCart } from "../../redux/cartSlide";
import Dropdowncart from "../Dropdowncart/Dropdowncart";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function Navbar() {
  const styles = useStyles();
  const [cates, setCates] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [openCart, setOpenCart] = useState(false);
  const [openRe, setOpenRe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    latitude: "",
    longitude: "",
    phone: "",
  });
  const [password, setPassword] = useState("");
  const { username, isFetching, users }= useSelector((state) => state.user);
  const {cart} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      username: name,
      password: password,
    };
    dispatch(login(payload));
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(logOutCart());
  };

  const handeRegister = async (e) => {
      e.preventDefault();
      const payload = {
          email : formData.email,
          username : formData.username,
          password : formData.password,
          name: {
              firstname: formData.firstName,
              lastname: formData.lastName,
          },
          address: {
              city: formData.city,
              street: formData.street,
              number: formData.number,
              zipcode: formData.zipcode,
              geolocation: {
                  lat: formData.latitude,
                  long: formData.longitude,
              }
          },
          phone: formData.phone,
      }
      const res = await registerUser(payload);
      if(res.status === 200){
          setOpenRe(false);
          dispatch(getUser(payload.username));
          setFormData({
            email: "",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            city: "",
            street: "",
            number: "",
            zipcode: "",
            latitude: "",
            longitude: "",
            phone: "",
          });
      }
  }

  useEffect(() => {
    if (username !== null) {
      setOpen(false);
      setName("");
      setPassword("");
      dispatch(getUsers());
    }
  }, [username, dispatch]);

  useEffect(() => {
    if(username !== null) {
      if(users.length > 0) {
        const user = users.find(user => user.username === username);
        dispatch(getCartByUserID(user.id));
      }
    }
  },[users, username, dispatch])

  useEffect(() => {
    const fetchCates = async () => {
      const res = await getAllCategories();

      if (res.status === 200) {
        setCates(res.data);
      }
    };
    fetchCates();
  }, []);
  return (
    <Box className={styles.container}>
      <Box className={styles.leftSide}>
        <Link className={styles.cates} to="/">
          Ecommerce Clone
        </Link>
      </Box>
      <Box className={styles.center}>
        {cates.length > 0 &&
          cates.map((i, index) => (
            <Link
              className={styles.cates}
              key={index}
              to={`/${i.replace(/\s/g, "")}`}
            >
              {i}
            </Link>
          ))}
      </Box>
      <Box className={styles.rightSide}>
        {username !== null ? (
          <Box className={styles.boxNavbar}>
            <Avatar
              className={styles.log}
              src="https://phunugioi.com/wp-content/uploads/2020/03/hot-girl-trung-quoc-dep-ngot-ngao.jpg"
            />
            <span className={styles.log}>{username}</span>
            <span onClick={handleLogOut} className={styles.log}>
              Log Out
            </span>
           <Badge className={styles.log} badgeContent={cart?.products?.length || 0} color="secondary" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartOutlined />
            </Badge> 
           {openCart && <Dropdowncart click={() => setOpenCart(false)}/>}
          </Box>
        ) : (
          <>
            <span className={styles.log} onClick={handleClickOpen}>
              Sign In
            </span>
            <span className={styles.log} onClick={(e) => setOpenRe(true)}>
              Sign Up
            </span>
          </>
        )}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <div className={styles.alert}>
            <span className={styles.title}>Sign In</span>
            <div className={styles.inputGroup}>
              <span>Username: </span>
              <input
                className={styles.input}
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <span>Password: </span>
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {!isFetching ? (
              <Button
                className={styles.btn}
                onClick={handleLogin}
                color="primary"
              >
                Sign In
              </Button>
            ) : (
              <span style={{ margin: "20px 0px" }}>
                <CircularProgress style={{ color: "white" }} />
              </span>
            )}
          </div>
        </Dialog>
        <Dialog
          open={openRe}
          TransitionComponent={Transition}
          keepMounted
          onClose={(e) => setOpenRe(false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <div className={styles.alertRegiser}>
            <span className={styles.title}>Sign Up</span>
            <div className={styles.inputContainer}>
              <div className={styles.inputGroup}>
                <span>Email: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>FirstName: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="FirstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>LastName: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="LastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>Username: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>Password: </span>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>City: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>Number: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Street"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>Street: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Street"
                  value={formData.street}
                  onChange={(e) =>
                    setFormData({ ...formData, street: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>Zipcode: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Zipcode"
                  value={formData.zipcode}
                  onChange={(e) =>
                    setFormData({ ...formData, zipcode: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>Latitude: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Latitude"
                  value={formData.latitude}
                  onChange={(e) =>
                    setFormData({ ...formData, latitude: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>Longitude: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Longitude"
                  value={formData.longitude}
                  onChange={(e) =>
                    setFormData({ ...formData, longitude: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <span>Phone: </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <Button
              className={styles.btn}
              onClick={handeRegister}
              color="primary"
            >
              Sign Up
            </Button>
          </div>
        </Dialog>
      </Box>
    </Box>
  );
}
