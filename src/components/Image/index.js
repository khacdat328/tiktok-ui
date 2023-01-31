import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import image from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = image.noImage, ...props }, ref) => {
   const [fallback, setFallBack] = useState('');

   const handleError = () => {
      setFallBack(fallback);
   };
   return (
      <img
         className={classNames(styles.wrapper, className)}
         ref={ref}
         src={fallback || src}
         alt={alt}
         {...props}
         onError={handleError}
      />
   );
});

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   className: PropTypes.string,
   fallback: PropTypes.string,
};
export default Image;
