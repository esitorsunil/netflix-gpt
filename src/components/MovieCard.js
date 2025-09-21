<<<<<<< HEAD
import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  
  return (
    <div className='w-36 md:w-48'>
        <img src={IMG_CDN_URL+ posterPath}
        alt="Movie Card" />
    </div>
  );
};

=======
import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  
  return (
    <div className='w-36 md:w-48'>
        <img src={IMG_CDN_URL+ posterPath}
        alt="Movie Card" />
    </div>
  );
};

>>>>>>> 6e8d130 (env)
export default MovieCard;