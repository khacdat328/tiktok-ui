import classnames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
   HomeIcon,
   HomeActiveIcon,
   LiveIcon,
   LiveActiveIcon,
   UserGroupIcon,
   UserGroupActiveIcon,
} from '~/components/Icons';

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
      </aside>
   );
}

export default Sidebar;
