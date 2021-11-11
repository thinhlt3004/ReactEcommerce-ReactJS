import React from 'react'
import { useStyles } from './styles';
import {Box} from '@material-ui/core';
import { Facebook, Instagram, MailOutlineOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import {Link} from 'react-router-dom';
export default function Footer() {
    const classes= useStyles();
    
    return (
        <Box className={classes.container}>
            <Box className={classes.left}>
                <Box className={classes.logo}>Ecommerce Clone</Box>
                <Box className={classes.content}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                </Box>
                <Box className={classes.socialIcon}>
                    <Facebook className={classes.icon} style={{ color: '#3B5999'}}/>
                    <Instagram className={classes.icon} style={{ color: '#E4405F'}} />
                    <Twitter className={classes.icon} style={{ color: '#55ACEE'}} />
                    <Pinterest className={classes.icon} style={{ color: '#E60023'}} />
                </Box>
            </Box>
            <Box className={classes.center}>
                <h1 style={{  letterSpacing: '2px', marginBottom: '10px'}}>Useful Link</h1>
                <Box className={classes.link}>
                    <Link className={classes.linkDetails} to='/electronics'>ELECTRONICS</Link>
                    <Link className={classes.linkDetails} to='/jewelery'>JEWELERY</Link>
                    <Link className={classes.linkDetails} to="/men'sclothing">MEN'S CLOTHING</Link>
                    <Link className={classes.linkDetails} to="/women'sclothing">WOMEN'S CLOTHING</Link>
                </Box>
            </Box>
            <Box className={classes.right}>
                <h1 style={{  letterSpacing: '2px', marginBottom: '10px'}}>Contact</h1>
                <Box className={classes.infos}>
                    <Room style={{marginRight:"10px"}}/>
                    622 Dixie Path , South Tobinchester 98336
                </Box>
                <Box className={classes.infos}>
                    <Phone style={{marginRight:"10px"}}/>
                    +1 234 56 78
                </Box>
                <Box className={classes.infos}>
                    <MailOutlineOutlined style={{marginRight:"10px"}}/>
                    contact@thinh.dev
                </Box>
                <img className={classes.payment} alt="img" src="https://i.ibb.co/Qfvn4z6/payment.png"/>          
            </Box>
        </Box>
    )
}
