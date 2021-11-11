import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
    },
    left: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
    },
    right: {
        padding: '20px',
        flex: 1,
    },
    center: {
        flex: 1,
        padding: '20px',
    },
    link:{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
    },
    linkDetails:{
        minWidth: '50%',
        flex: 1,
        textDecoration: 'none',
        margin: '20px 0px',
        letterSpacing: '2px',
        '&:hover' : {
            color: 'red',
        },
    },
    logo:{
        fontSize: '35px',
        fontWeight: 700,
        letterSpacing: '2px',
    },
    content:{
        margin: '20px 10px 20px 0px',
        letterSpacing: '2px',
    },
    socialIcon:{
        display: 'flex',
        alignItems: 'center',
    },
    icon:{
        borderRadius: '50%',
        margin: '0px 20px 0px 0px',
        fontSize: '40px',
    },
    infos:{
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
    },
    payment:{
        width: '50%',
        cursor: 'pointer',
        marginTop: '20px',
    }
}));