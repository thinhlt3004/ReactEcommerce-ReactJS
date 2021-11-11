import React from 'react'
import Slider from '../../components/Slider/Slider'
import { useStyles } from './styles'
export default function Home() {
    const classes = useStyles;
    return (
        <div className={classes.container}>
            <Slider/>
        </div>
    )
}
