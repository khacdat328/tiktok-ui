import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import FormWrapper from './FormWrapper';
import { HideIcon, ShowIcon, InstagramIcon } from '~/components/Icons';
import Button from '~/components/Button';
import { setChildrenContext } from '../Modal';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);
const ForgotPwd = 'ResetPwd';
function EmailLogin({ ...props }) {
   const ModalContext = useContext(setChildrenContext);
   const [emailInput, setEmailInput] = useState('');
   const [pwdInput, setPwdInput] = useState('');
   const [showPwd, setShowPwd] = useState(false);
   const toggleShowPwd = (e) => {
      e.preventDefault();
      setShowPwd(!showPwd);
   };

   const handleEmailChange = (e) => setEmailInput(e.target.value);
   const handlePWdChange = (e) => setPwdInput(e.target.value);
   return (
      <>
         <h1 className={cx('title')}>Log in</h1>
         <div>
            <div className={cx('description')}>
               <h4>Email or username</h4>
               <button className={cx('change-form')}>Log in with phone</button>
            </div>
            <form className={cx('email-form')}>
               <div className={cx('input-container')}>
                  <input
                     className={cx('email-input', 'input')}
                     type="text"
                     placeholder="Email or username"
                     onChange={handleEmailChange}
                  />
               </div>
               <div className={cx('pwd-container', 'input-container')}>
                  <input
                     className={cx('pwd-input', 'input')}
                     type={showPwd ? 'text' : 'password'}
                     placeholder="Password"
                     onChange={handlePWdChange}
                  />
                  <button className={cx('show-pwd-btn')} onClick={toggleShowPwd}>
                     {showPwd ? <ShowIcon /> : <HideIcon />}
                  </button>
               </div>
               <button
                  href="#"
                  className={cx('change-form')}
                  onClick={() => {
                     ModalContext.setNavigateBack((prev) => [...prev, ForgotPwd]);
                     ModalContext.setChildren(ForgotPwd);
                  }}
               >
                  Forgot password?
               </button>
               <Button type="primary" className={cx('submit-button')} disabled={!emailInput || !pwdInput}>
                  Log in
               </Button>
            </form>
         </div>
      </>
   );
}

export default EmailLogin;
