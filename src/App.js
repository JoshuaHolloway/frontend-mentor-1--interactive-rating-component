import { useState, useRef } from 'react';
import { gsap } from 'gsap';

import Card1 from './comps/card-1';
import Card2 from './comps/card-2';
import Loading from './comps/loading';

// ==============================================

export default function App() {
  const [rating, setRating] = useState();

  const overlay = useRef(null);
  const card_1 = useRef(null);
  const card_2 = useRef(null);

  // --------------------------------------------

  const beginLoading = () => {
    const duration = 0.2;

    gsap.to(overlay.current, {
      display: 'grid',
      duration: 1e-6,
    });

    gsap.fromTo(
      overlay.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration,
      }
    );
  };

  // --------------------------------------------

  const finishLoading = () => {
    const timeline = gsap.timeline();

    timeline.to(card_1.current, {
      opacity: 0,
      display: 'none',
    });

    timeline.to(card_2.current, {
      display: 'flex',
      duration: 1e-6,
    });

    timeline.to(
      card_2.current,
      {
        opacity: 1,
      },
      '<='
    );

    const duration = 0.2;
    timeline.fromTo(
      overlay.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        display: 'none',
        duration,
      }
    );
  };

  // --------------------------------------------

  const submitHandler = async () => {
    beginLoading();

    await fetch(
      'https://josh-portfolio-firebase-proj.firebaseio.com/ratings.json',
      { method: 'POST', body: JSON.stringify({ rating }) }
    );

    finishLoading();
  };

  // --------------------------------------------

  return (
    <>
      <Card1
        ref={card_1}
        submitHandler={submitHandler}
        rating={rating}
        setRating={setRating}
      />

      <Card2 ref={card_2} rating={rating} />

      <Loading ref={overlay} />
    </>
  );
}

// ==============================================
