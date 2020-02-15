import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { getUpcomingMovie, imageUrl} from '../../api/index';
import LoadingSpinner from '../LoadingSpinner';

import '../Styles/ResultCarousel.css';

const ResultCarousel = props => {
    const [movies, setMoviesState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(getUpcomingMovie);

                if (!response.ok) {
                    throw Error(
                        `It went wrong ${response.status} message: ${response.statusText}`
                    );
                }
                const upComingMovie = await response.json();
                const moviesData = upComingMovie.results;
                setMoviesState(moviesData.filter(m => m.backdrop_path));
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const result = movies.map((movie, index) => {
        return (
            <Carousel.Item key={`${movie.id} ${movie.title}`}>
                <img
                    className="d-block"
                    src={`${imageUrl}${movie.backdrop_path}`}
                    alt={movie.name}
                />
                <Carousel.Caption>
                    <h4>Upcoming Movies</h4>
                    <span className="title">
                        <h1>{movie.title}</h1>
                    </span>
                    <p className="overview">{movie.overview}</p>
                    <h1>Release Date- {movie.release_date}</h1>
                </Carousel.Caption>
            </Carousel.Item>
        );
    });

    return (
        <div className="spinner-center">
            {result.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <Carousel className="carousel_images">{result}</Carousel>
            )}
        </div>
    );
};

export default ResultCarousel;
