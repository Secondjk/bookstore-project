import React, { useState } from 'react';
import styles from './Carousel.module.css';
import { news } from 'db/News';
import { Carousel } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselB: React.FC<RouteComponentProps> = (x) => {
  const [index, setIndex] = useState(0);

  const notAllowedPages: string[] = [
    '/',
    '/about',
  ];
  const isAllowed = !notAllowedPages.includes(x?.location.pathname);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    isAllowed &&
      <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
        {news.map((n, idx) => (
          <Carousel.Item className={styles.carouselItem} key={idx}>
            <img src={n.src} alt={`news${idx}`} />
          </Carousel.Item>
        ))}
      </Carousel>
  );
};

export const CarouselBase = withRouter(CarouselB);
