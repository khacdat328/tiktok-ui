import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AccountItem from './AccountItem';
import * as suggested from '~/apiServices/userService';
import styles from './SidebarAccount.module.scss';
const cx = classNames.bind(styles);

function SidebarAccount({ label, data }) {
   const initPerPage = 5;
   const [accounts, setAccount] = useState([]);
   const [perPage, setPerPage] = useState(initPerPage);

   const showMore = () => {
      if (accounts) {
         if (accounts.length === initPerPage) {
            setPerPage(initPerPage * 4);
         } else {
            setPerPage(initPerPage);
         }
      }
   };

   useEffect(() => {
      suggested.suggestedFollowing(perPage).then((data) => setAccount(data));
   }, [perPage]);

   console.log(accounts);
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>{label}</p>
         {accounts && accounts.map((account, index) => <AccountItem key={index} data={account} />)}

         <button className={cx('see-all-btn')} onClick={showMore}>
            <p className={cx('see-all')}>{accounts.length === initPerPage ? `See all` : `See less`}</p>
         </button>
      </div>
   );
}

SidebarAccount.propTypes = {
   label: PropTypes.string.isRequired,
};
export default SidebarAccount;
