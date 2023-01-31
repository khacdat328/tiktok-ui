import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
   to,
   href,
   leftIcon,
   rightIcon,
   type = false,
   secondType = false,
   size = false,
   disabled = false,
   children,
   className,
   onClick,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   };

   if (disabled) {
      Object.keys(props).forEach((key) => {
         //  console.log(typeof props[key]);
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }
   const classes = cx('wrapper', {
      [className]: className,
      [type]: type,
      [secondType]: secondType,
      [size]: size,
      disabled,
   });
   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   type: PropTypes.string,
   secondType: PropTypes.string,
   size: PropTypes.string,
   disabled: PropTypes.bool,
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
   onClick: PropTypes.func,
}
export default Button;
