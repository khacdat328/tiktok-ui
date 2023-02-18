import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import {
   faArrowRightFromBracket,
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faFilm,
   faGear,
   faPlus,
   faQuestionCircle,
   faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import config from '~/config';
import avatarIcon from '~/assets/images/User_Avatar.png';
import image from '~/assets/images';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               code: 'en',
               title: 'english',
            },
            {
               code: 'vi',
               title: 'Vietnamese',
            },
            {
               code: 'fr',
               title: 'france',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faQuestionCircle} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
];
function Header() {
   const currentUser = true;

   // const handleMenuChange = (MenuItem) => console.log(MenuItem);

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View Profile',
         to: '/feedback',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coin',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faFilm} />,
         title: 'LIVE Studio',
         to: '/studio',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/settings',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
         title: 'Log out',
         to: '/logout',
         separate: true,
      },
   ];
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('site-logo')}>
               <img src={image.logo} alt="logo" />
            </Link>

            <Search />

            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Button type="secondary" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                     </Button>

                     <Tippy delay={[0, 100]} content="Message">
                        <button className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                     </Tippy>

                     <Tippy delay={[0, 100]} content="Inbox">
                        <button className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faMessage} />
                           <span className={cx('badge')}>12</span>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button type="secondary" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                     </Button>
                     <Button type="primary">Log in</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                  {currentUser ? (
                     <Image className={cx('user-avatar')} src={avatarIcon} alt="img" />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
