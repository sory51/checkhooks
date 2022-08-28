import React,{useState,useEffect} from 'react';
import {data} from '../assets/data';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = () => {
    return (
        <div>
           {
            data.map((movie,index)=>(
                <MovieCard movie={movie} key={index} />

            ))
           } 
        </div>
    );
};

export default MovieList;





