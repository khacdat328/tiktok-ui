import classNames from 'classnames/bind';
import { createContext, useRef, useState } from 'react';
import Portal from '~/components/Portal';
import LoginOption from './Form/LoginOption';
import styles from './Modal.module.scss';
import QRLogin from './Form/QRLogin';
import ResetPwd from './Form/ResetPwd';
import SignUpOption from './Form/SignUpOption';
import { CloseIcon } from '~/components/Icons';
import EmailLogin from './Form/EmailLogin';
import FormWrapper from './Form/FormWrapper';

const cx = classNames.bind(styles);
export const setChildrenContext = createContext(null);
function Modal() {
   const [children, setChildren] = useState('LoginOption');
   const [navigateBack, setNavigateBack] = useState(['LoginOption']);
   const [showModal, setShowModal] = useState(false);

   const components = {
      LoginOption: LoginOption,
      EmailLogin: EmailLogin,
      QRLogin: QRLogin,
      ResetPwd: ResetPwd,
      SignUpOption: SignUpOption,
   };

   const handleNavigateBack = (e) => {
      e.splice(-1);
      return e;
   };
   const Comp = components[children];
 
   return (
      <setChildrenContext.Provider value={{ children, setChildren, setNavigateBack}}>
         <Portal>
            <div className={cx('background')}>
               <div className={cx('wrapper')}>
                  <button className={cx('close-modal')}>
                     <CloseIcon width="1.5rem" height="1.5rem" />
                  </button>
                  {navigateBack.length > 1 && (
                     <button
                        className={cx('navigate-back')}
                        onClick={() => {
                           handleNavigateBack(navigateBack);
                           setChildren(navigateBack.slice(-1));
                        }}
                     >
                        <span className={cx('left-arrow')}></span>
                     </button>
                  )}
                  <FormWrapper currentForm={children}>
                     <Comp />
                  </FormWrapper>
               </div>
            </div>
         </Portal>
      </setChildrenContext.Provider>
   );
}

export default Modal;
