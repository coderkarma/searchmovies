import React from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { trendingAll, imageUrl } from '../../api/index';
import LoadingSpinner from '../LoadingSpinner';

import ModalTrailer from '../Result/ModalTrailer';
import '../Styles/FeaturedTtitle.css';

const TrendingShows = props => {
    const [trending, setTrendingShowstate] = useState([]);
    const [currentModal, setCurrentModal] = useState(null);

    useEffect(() => {
        fetch(trendingAll)
            .then(response => response.json())
            .then((trendingShows, id) => {
                const trendingAllShows = trendingShows.results;
                setTrendingShowstate(trendingAllShows);
            });
    }, []);

    const trendingShows = trending.map((trendingShow, idx) => {
        const handleTrailerOnClick = movieIndex => {
            setCurrentModal(movieIndex);
        };

        return (
            <Col xs={12} md={4} lg={4} key={idx} className="my-4">
                <Card className="my-3 h-100 card shadow">
                    <Card.Img
                        variant="top"
                        src={`${imageUrl}${trendingShow.backdrop_path}`}
                    />
                    <Card.Body>
                        <Card.Title>{trendingShow.title}</Card.Title>
                        <span className="trailer-div">
                            <Button
                                className="primary "
                                onClick={e => handleTrailerOnClick(idx)}
                            >
                                Trailer!
                            </Button>
                        </span>
                        {currentModal === idx ? (
                            <ModalTrailer
                                movieId={trendingShow.id}
                                closeCallback={() => setCurrentModal(false)}
                            />
                        ) : (
                            ''
                        )}
                    </Card.Body>
                </Card>
            </Col>
        );
    });
    return (
        <Container>
            <h2 className="mt-3 trending-shows">Trending Shows</h2>
            <Row>
                {trendingShows.length === 0 ? (
                    <LoadingSpinner />
                ) : (
                    trendingShows
                )}
            </Row>
        </Container>
    );
};

export default TrendingShows;
