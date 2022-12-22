import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);
function AccountItems() {
   return (
      <div className={cx('wrapper')}>
         <img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt=""
            className={cx('avatar')}
         />
         <div className={cx('infor')}>
            <h4 className={cx('name')}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>Nguyen Van A</span>
         </div>
      </div>
   );
}

export default AccountItems;
