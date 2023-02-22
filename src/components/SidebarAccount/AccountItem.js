import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import AccountPreview from './AccountPreview';
import { Wrapper } from '../Popper';
import styles from './SidebarAccount.module.scss';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
   const renderPreview = () => {
      return (
         <div tabIndex="1">
            <Wrapper>
               <AccountPreview data={data} />
            </Wrapper>
         </div>
      );
   };
   return (
      <div key={data.id}>
         <Tippy interactive delay={[600, 0]} render={renderPreview} offset={[-20, 0]} placement="bottom">
            <div className={cx('account-item')}>
               <img
                  className={cx('avatar')}
                  src={data.avatar}
                  alt=""
               />
               <div className={cx('item-infor')}>
                  <h4 className={cx('nickname')}>
                     {/* Chau Khac Dat */}
                     {data.nickname}
                     {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                  </h4>
                  <p className={cx('name')}>{data.first_name} {data.last_name}</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

// AccountItem.propTypes = {};
export default AccountItem;
