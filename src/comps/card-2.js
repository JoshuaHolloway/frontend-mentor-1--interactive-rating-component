import { forwardRef } from 'react';

import thank from '../img/illustration-thank-you.svg';

// ==============================================

const Card1 = forwardRef(({ rating }, ref) => {
  // --------------------------------------------

  // --------------------------------------------

  return (
    <div ref={ref} className='card card-2'>
      {' '}
      <div className='row'>
        <img src={thank} alt='' />
      </div>
      <div className='row'>
        <div className='chip'>You selected {rating} out of 5</div>
      </div>
      <div className='row text-block'>
        <h2>Thank you!</h2>

        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
});

// ==============================================

export default Card1;
