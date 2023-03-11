import { useState } from 'react';
import classNames from 'classnames/bind';
import { HideIcon, ShowIcon } from '~/components/Icons';
import Button from '~/components/Button';
import styles from './Form.module.scss';
const cx = classNames.bind(styles);
function ResetPwd() {
   const [showPwd, setShowPwd] = useState(false);
   return (
      <>
         <h1 className={cx('title')}>Reset password</h1>
         <div>
            <div className={cx('description')}>
               <h4>Enter email address</h4>
               <button className={cx('change-form')}>Reset with phone number</button>
            </div>
            <form className={cx('email-form')}>
               <div className={cx('input-container')}>
                  <input className={cx('email-input', 'input')} type="text" placeholder="Email address" />
               </div>
               <div className={cx('input-container', 'digit-container')}>
                  <input className={cx('digit-code-input', 'input')} type="text" placeholder="Enter 6-digit code" />
                  <button className={cx('send-code')}>Send code</button>
               </div>
               <div className={cx('pwd-container', 'input-container')}>
                  <input className={cx('pwd-input', 'input')} placeholder="Password" />
                  <button className={cx('show-pwd-btn')}>{showPwd ? <ShowIcon /> : <HideIcon />}</button>
               </div>
                <div></div>
               <Button type="primary" className={cx('submit-button')}>
                  Log in
               </Button>
            </form>
         </div>
      </>
   );
}

export default ResetPwd;
