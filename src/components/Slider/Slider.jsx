import React, {useCallback, useEffect, useRef, useState} from 'react'
import {sliderItems} from './../../dummyData';
import {Box} from '@material-ui/core';
import {useStyles} from './styles';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const interval = useRef(null);
    
    const classes= useStyles({slider : sliderItems, slideIndex : (slideIndex * (-100)), index : slideIndex});
    const nextSlide = useCallback(() => {
        setSlideIndex(slideIndex === sliderItems.length - 1 ? 0 : slideIndex + 1 );
    },[slideIndex])

    useEffect(() => {
        const timeout = setTimeout(nextSlide, 10000);
        interval.current = timeout ;
        return function () {
          if (interval.current) {
            clearTimeout(interval.current);
          }
        };
    },[nextSlide]);

    const handleClick = (direction) => {
        if(direction === 'left'){
          setSlideIndex(slideIndex === 0 ? sliderItems.length - 1 : slideIndex - 1 );
        }else{
          setSlideIndex(slideIndex === sliderItems.length - 1 ? 0 : slideIndex + 1 );
        }
    };

    console.log(slideIndex);
    return (
        <Box className={classes.container}>
            <Box className={classes.leftArrow} onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Box>
            <Box className={classes.wrapper}>
                {sliderItems.map((i, index) => (
                    <Box className={classes.sliderContainer} key={index}>
                        <Box>
                            <img className={classes.img} src={i.img} alt={i.title} />
                        </Box>
                        <Box className={classes.titleContainer}>
                            {i.title}
                            <Box  className={classes.desc}>
                                {i.desc}
                            </Box>                      
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box className={classes.rightArrow} onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Box>
        </Box>
    )
}
