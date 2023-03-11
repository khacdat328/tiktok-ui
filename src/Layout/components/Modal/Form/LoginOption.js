import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faQrcode, faRandom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Modal, { setChildrenContext } from '../Modal';
import { useContext, useState } from 'react';
import {
   QRIcon,
   UserICon,
   FacebookIcon,
   GoogleIcon,
   TwitterIcon,
   LINEIcon,
   KaKaoTalkIcon,
   AppleIcon,
   InstagramIcon,
} from '~/components/Icons';
import FormWrapper from './FormWrapper';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);
function LoginOption({ callback }) {
   const ModalContext = useContext(setChildrenContext);
   const handleFormOption = (e) => {
      if (e.available) {
         ModalContext.setNavigateBack((prev) => [...prev, e.components]);
         ModalContext.setChildren(e.components);
      } else {
         alert('This feature is not available!');
      }
   };
   const buttons = [
      { title: 'Use QR code', icon: <QRIcon className={cx('login-type')} />, components: 'QRLogin', available: true },
      {
         title: 'Use phone / email /username',
         icon: <UserICon className={cx('login-type')} />,
         components: 'EmailLogin',
         available: true,
      },
      { title: 'Continue with Facebook', icon: <FacebookIcon className={cx('login-type')} />, available: false },
      { title: 'Continue with Google', icon: <GoogleIcon className={cx('login-type')} />, available: false },
      { title: 'Continue with Twitter', icon: <TwitterIcon className={cx('login-type')} />, available: false },
      { title: 'Continue with LINE', icon: <LINEIcon className={cx('login-type')} />, available: false },
      { title: 'Continue with KaKaoTalk', icon: <KaKaoTalkIcon className={cx('login-type')} />, available: false },
      { title: 'Continue with Apple', icon: <AppleIcon className={cx('login-type')} />, available: false },
      { title: 'Continue with Instagram', icon: <InstagramIcon className={cx('login-type')} />, available: false },
   ];

   return (
      // <modalComponent.Provider value={modals}>
         <>
            <h1 className={cx('title')}>Log in to TikTok</h1>
            {buttons.map((buttonItem, index) => (
               <button key={index} className={cx('button')} onClick={() => handleFormOption(buttonItem)}>
                  {buttonItem.icon}
                  <span>{buttonItem.title}</span>
               </button>
            ))}
         </>
      // </modalComponent.Provider>
   );
}

export default LoginOption;
