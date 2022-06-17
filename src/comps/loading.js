import Spinner from './svg/spinner';

import { forwardRef } from 'react';

// ==============================================

const Loading = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='overlay'>
      <Spinner />
    </div>
  );
});

// ==============================================

export default Loading;
