import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    container:{
        // width: '100%',
        minHeight: '70vh',
        display: 'flex',
        padding: '40px',
        overflow: 'hidden',
    },
    left: {
        flex: 2,
        padding: '30px',
    },
    right: {
        flex: 1,
        padding: '30px',
        border : '1px solid lightgray',
        minHeight: '40vh',
        margin: '20px',
        overflow: 'hidden',
    },
    title:{
        fontSize: '40px',
        fontWeight: 500,
        marginBottom: '30px',
        letterSpacing: '2px',
    },
    bill:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 10px',
        letterSpacing: '2px',
    },
    billTotal:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 10px',
        fontSize: '25px',
        fontWeight: 500,
        letterSpacing: '2px',
    },
    buttonDiv:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'black !important',
        color: 'white !important',
        width: '100%',
        margin: '10px 0px',
        padding: '10px'
    },
    buttonDelete:{
        backgroundColor: 'black !important',
        color: 'white !important',
        margin: '10px 0px',
        padding: '10px',
    },
    btnDiv:{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    empty:{
        textAlign: 'center',
        fontWeight: 500,
        color: 'red',
        letterSpacing: '3px',
        marginTop: '30px',
        fontSize: '25px',
    }
}));