import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);

function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <header className={cx('header')}>
            <img
               className={cx('avatar')}
               src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ff6cfa684d7eb1c00409c4214d8ab62f~c5_100x100.jpeg?x-expires=1676962800&x-signature=3UDwZwoon4srFVfbJQRc66einkI%3D"
               alt=""
            />
            <div>
               <Button type="primary" className={cx('follow-btn')}>
                  Follow
               </Button>
            </div>
         </header>
         <div className={cx('body')}>
            <h4 className={cx('nickname')}>
               chaukhacdat
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <p className={cx('name')}>Chau Khac Dat</p>
         </div>
         <p className={cx('stat')}>
            <span className={cx('number')}>
               <strong>7.4M  {' '}</strong>
            </span>
            <span className={cx('label')}>Followers</span>
            <span className={cx('number')}>
               <strong>7.4M   {' '}</strong>
            </span>
            <span className={cx('label')}>Likes</span>
         </p>
      </div>
   );
}

export default AccountPreview;
