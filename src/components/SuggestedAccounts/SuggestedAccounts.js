import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>{label}</p>
         <AccountItem />
         <AccountItem />
         <AccountItem />
         <AccountItem />
         <AccountItem />
         <button className={cx('see-all-btn')}>
            <p className={cx('see-all')}>See all</p>
         </button>
      </div>
   );
}

SuggestedAccount.propTypes = {
   label: PropTypes.string.isRequired,
};
export default SuggestedAccount;
