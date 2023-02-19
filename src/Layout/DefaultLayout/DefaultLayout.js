import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Header from '../components/Header/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar';

const cx = classnames.bind(styles);
function DefaultLayout({ children }) {
   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}

DefaultLayout.propTypes = {
   children: PropTypes.node,
};
export default DefaultLayout;
