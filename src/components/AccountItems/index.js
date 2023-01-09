import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image from '../Image';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);
function AccountItems({ data }) {
   return (
      <Link to={`/@/${data.nickname}`} className={cx('wrapper')}>
         <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
         <div className={cx('infor')}>
            <h4 className={cx('name')}>
               <span>{data.full_name}</span>
               {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
            </h4>
            <span className={cx('username')}>{data.nickname}</span>
         </div>
      </Link>
   );
}

export default AccountItems;
