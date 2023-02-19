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
import SuggestedAccounts from '~/components/SuggestedAccounts';
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
         <SuggestedAccounts label='Suggested accounts'/>
         <SuggestedAccounts label='Follwing accounts'/>
      </aside>
   );
}

export default Sidebar;
