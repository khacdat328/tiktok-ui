import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
   return (
      <div className={cx('wrapper')}>
         <header className={cx('header')}>
            <Image className={cx('avatar')} src={data.avatar} alt="" />
            <div>
               <Button type="primary" className={cx('follow-btn')}>
                  Follow
               </Button>
            </div>
         </header>
         <div className={cx('body')}>
            <h4 className={cx('nickname')}>
               {data.nickname}
               {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </h4>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
         </div>
         <p className={cx('stat')}>
            <span className={cx('number')}>
               <strong> {data.followers_count} </strong>
            </span>
            <span className={cx('label')}>Followers</span>
            <span className={cx('number')}>
               <strong>{data.likes_count} {' '}</strong>
            </span>
            <span className={cx('label')}>Likes</span>
         </p>
      </div>
   );
}

export default AccountPreview;
