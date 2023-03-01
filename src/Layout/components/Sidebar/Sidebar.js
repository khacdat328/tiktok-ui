import classnames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
   HomeIcon,
   HomeActiveIcon,
   LiveIcon,
   LiveActiveIcon,
   UserGroupIcon,
   UserGroupActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import SidebarAccount from '~/components/SidebarAccount';
import Button from '~/components/Button';
import styles from './Sidebar.module.scss';
const cx = classnames.bind(styles);
function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem
               title="Following"
               to={config.routes.following}
               icon={<UserGroupIcon />}
               activeIcon={<UserGroupActiveIcon />}
            />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
         </Menu>
         <div style={{ padding: '20px 8px 24px' }}>
            <p style={{ color: 'rgba(22, 24, 35, .5)', fontSize: '1.6rem', lineHeight: '22px' }}>
               Log in to follow creators, like videos, and view comments.
            </p>
            <Button type="outline" size="large" className={cx('Login')}>
               Log in
            </Button>
         </div>
         <SidebarAccount label="Suggested accounts" />
         {/* <SuggestedAccounts label='Follwing accounts'/> */}
      </aside>
   );
}

export default Sidebar;
