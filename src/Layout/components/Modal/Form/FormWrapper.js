import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { setChildrenContext } from '../Modal';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);
function FormWrapper({ children }) {
   const ModalContext = useContext(setChildrenContext);
   const [signUp, setSignUp] = useState(false);
   const hasAccount = signUp ? 'LoginOption' : 'SignUpOption';
   const switchingForm = () => {
      setSignUp(!signUp);
      ModalContext.setChildren(hasAccount);
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container')}>
            <div className={cx('content')}>{children}</div>
         </div>
         <div className={cx('signup-container')}>
            <div>{signUp ? `Don't have an account?` : 'Already have an account?'}</div>
            <button className={cx('signup')} onClick={switchingForm}>
               {signUp ? 'Login' : 'Sign Up'}
            </button>
         </div>
      </div>
   );
}

export default FormWrapper;
