import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import { GridContainer } from './GenreSelector.elements';
import { Link } from 'react-router-dom';
import { TweenMax, Power3 } from 'gsap';

const GenreSelector = () => {

    const genres = ['fiction', 'children', 'novels', 'translations', 'short story', 'educational', 'biography', 'poetry'];
    let genreRef = useRef([]);

    useEffect(() => {
        TweenMax.from(genreRef.current,{opacity: 0, scale: 0, stagger: .1, ease: Power3.easeOut, delay: 1})
    }, [])
    return (
            <GridContainer container justify="center" spacing={2}>
                { genres.map( (genre, index) => (
                    <Grid ref={ el => genreRef.current[index] = el } key={genre} item xs={6} sm={3}>
                        <Link style={{textDecoration: 'none'}} to={`/genre/${genre.split(' ').join('-')}`}>
                        <div className={`genre ${genre.split(' ').join('-')}`}>
                            <h3>{genre}</h3>
                        </div>
                        </Link>
                    </Grid>

                ))}
            </GridContainer>
    )
}

export default GenreSelector
