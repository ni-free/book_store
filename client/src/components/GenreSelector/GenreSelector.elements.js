import { Grid } from '@mui/material';
import styled from 'styled-components';

export const GridContainer = styled(Grid)`
    width: 80%;
    margin: 30px auto;
    @media (max-width: 1100px){
        width: 90vw;
    };
    @media (max-width: 400px){
        margin: 10px auto;
    
    };
    
    & .genre{
        height: 90px;
        width: 230px;
        margin: 0 auto;
        border-radius: 15px;
        display: grid;
        place-items: center;
        transition: all .3s ease-in-out;
        & h3{
            color: #3C3636;
            text-transform: uppercase;
            transition: all .3s ease-in-out;
        };
        &:hover{
            cursor: pointer;
        };
        @media (max-width: 1300px){
            height: 90px;
            width: 200px;
        };
        @media (max-width: 1100px){
            height: 75px;
            width: 190px;
        };
        @media (max-width: 880px){
            height: 60px;
            width: 145px;
            & h3{
            font-size: 0.9rem;
        };
        };
    };
    & .fiction{
        background-color: #C1E8FF;
        &:hover{
            & h3{
                color: #787474;
                transform: scale(1.3);
            };
            background-color:  #ffffff;
        };
    };
    & .children{
        background-color: #C1E8FF;
        &:hover{
            & h3{
                color: #787474;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .novels{
        background-color: #C1E8FF;
        &:hover{
            & h3{
                color: #787474;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .translations{
        background-color: #C1E8FF;
        &:hover{
            & h3{
                color: #787474;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .short-story{
        background-color: #C1E8FF;
        &:hover{
            & h3{
                color: #787474;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .educational{
        background-color: #C1E8FF;
        &:hover{
            & h3{
                color: #787474;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .biography{
        background-color: #C1E8FF;
        &:hover{
            & h3{
                color: #787474;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .poetry{
        background-color: #C1E8FF;
        &:hover{
            & h3{
                color: #787474;
                transform: scale(1.3);
            };
            background-color:  #ffffff;
        };
    };
`

    
