import { useState, forwardRef, Fragment } from 'react';

import Circle from './svg/circle';
import Star from './svg/star';

// ==============================================

const Card1 = forwardRef(({ submitHandler, rating, setRating }, ref) => {
  // --------------------------------------------

  const [disabled, setDisabled] = useState(true);

  // --------------------------------------------

  const clickHandler = (idx) => () => {
    setDisabled(false);
    setRating(idx);
  };

  // --------------------------------------------

  return (
    <div ref={ref} className='card card-1'>
      <div className='row'>
        <Circle classNames='non-click'>
          <Star />
        </Circle>
      </div>
      <div className='row text-block'>
        <h2>How did we do?</h2>

        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className='row'>
        {[1, 2, 3, 4, 5].map((x, i) => (
          <Fragment key={i}>
            <Circle
              classNames={rating === x ? 'selected' : ''}
              onClick={clickHandler(x)}
            >
              {x}
            </Circle>
          </Fragment>
        ))}
      </div>
      <div className='row'>
        <div
          className={`button ${disabled ? 'disabled' : ''}`}
          onClick={submitHandler}
        >
          SUBMIT
        </div>
      </div>
    </div>
  );
});

// ==============================================

export default Card1;
