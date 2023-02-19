import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import AccountPreview from './AccountPreview';
import { Wrapper } from '../Popper';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
   const renderPreview = (props) => {
      return (
         <div tabIndex="1" {...props}>
            <Wrapper>
               <AccountPreview />
            </Wrapper>
         </div>
      );
   };
   return (
      <div>
         <Tippy interactive delay={[600, 0]} render={renderPreview} offset={[-20,0]} placement="bottom">
            <div className={cx('account-item')}>
               <img
                  className={cx('avatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ff6cfa684d7eb1c00409c4214d8ab62f~c5_100x100.jpeg?x-expires=1676962800&x-signature=3UDwZwoon4srFVfbJQRc66einkI%3D"
                  alt=""
               />
               <div className={cx('item-infor')}>
                  <h4 className={cx('nickname')}>
                     chaukhacdat
                     <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                  </h4>
                  <p className={cx('name')}>Chau Khac Dat</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

// AccountItem.propTypes = {};
export default AccountItem;
