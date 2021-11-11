import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  filterContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '40px 120px 0px 120px',
  },
  productContainer: {
    padding: "30px 120px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    flex: 1,
    margin: "5px",
    minWidth: "300px",
    height: "270px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5fbfd",
    position: "relative",
    "&:hover": {
      "& $info": {
        opacity: 1,
      },
    },
  },
  info: {
    opacity: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0, 0.2)",
    zIndex: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.5s ease",
  },
  img: {
    width: "100%",
    height: "100%",
    // display: "none",
    zIndex: 2,
    objectFit: "contain",
  },
  icon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: "10px",
    transition: "all 0.5s ease",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#e9f5f5",
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
  optFilter:{
    padding: '10px',
    marginLeft: '20px',
    width: '100px',
    fontSize: '15px',
  },
  contextFilter:{
      fontSize: '20px',
      fontWeight: 'bold',
  },
  titleFilter:{
      textTransform: 'uppercase',
      letterSpacing: '6px',
  },
  filterSelect:{
      display: 'flex',
      alignItems: 'center',
  }
}));
