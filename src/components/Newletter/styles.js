import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    container:{
        maxWidth: '100%',
        height: 'calc(100vh - 70px)',
        overflow: 'hidden',
        margin: '0px',
        backgroundColor: '#fcf5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    header:{
        fontSize: '70px',
        textTransform: 'uppercase',
        fontWeight: 700,
        letterSpacing: '5px',
    },
    content:{
        fontSize: '40px',
        margin: '40px 0px 60px 0px',
        letterSpacing: '10px'
    },
    inputForm:{
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    input:{
        flex: 4,
        height: '90%',
        padding: '2px 20px',
        fontSize: '15px',
        border: '1px solid #CEE5D0',
        textAlign: 'center',
        '&:focus': {
            outline: 'none',
        }
    },
    button:{
        flex: 1,
        backgroundColor: 'teal !important',
        color: 'white',
        height: '39px',
    }
    
}));