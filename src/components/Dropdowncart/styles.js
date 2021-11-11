import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: "70px",
    right: "0px",
    width: "250px",
    borderRadius: "0px 0px 10px 10px",
  },
  cartItemContainer: {
    backgroundColor: props => props.cartDetails ? "white" :"black",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    transition: 'all 1s ease',
    height: props => props.cartDetails ? " 70px" : "",
    '&:hover':{
        opacity: props => props.cartDetails ? "" : 0.5,
        backgroundColor: props => props.cartDetails ? '#f2f3f5' : "",
    }
  },
  info: {
    display: "flex",
    flexDirection: "column",
    marginLeft:  props => props.cartDetails ? "40px" : "15px",
    fontWeight: props => props.cartDetails ? 400: "",
    fontSize: props => props.cartDetails ? '20px': "",
    letterSpacing: props => props.cartDetails ? '2px' : "",
  },
  leftSide: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: props => props.cartDetails ? "100px" :"35px",
    width: props => props.cartDetails ?  "100px" :"35px",
    objectFit: "cover",
  },
  cartDetails:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    fontSize: "20px",
    letterSpacing: '2px',
  }
}));
