import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100%',
        display: 'flex',
        padding: '40px',
    },
    img: {
        width: '70vh',
        height: '80vh',
        flex: 1,
        // backgroundColor: 'red',
    },
    content:{       
        flex: 1,
        minHeight: '100%',
        padding: '50px',
        letterSpacing: '3px',
    },
    stars:{
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0px',
    },
    title:{
        fontSize: '32px',
        fontWeight: 200,
        marginTop: '60px',
        letterSpacing: '3px',
    },
    description:{
        margin: '20px 0px',
    },
    price:{
        fontSize: '40px',
        fontWeight: 100,
        display: 'inline',
    },
    count:{
        fontSize: '25px',
        fontWeight: 100,
        margin: '10px 0px',
    },
    rating:{
        fontWeight: 500,
    },
    cartOpt:{
        display: 'flex',
        alignItems: 'center',

    },
    AmountContainer:{
        display: 'flex',
        alignItems: 'center',
    },
    amount:{
        fontSize: '17px',
        margin: '0px 10px',
        border: '1px solid #008080',
        width: '32px',
        height: '32px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
    },
    button:{
        marginLeft: '50px',
    }
}));