import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faKeyboard, faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import {
   faArrowRightFromBracket,
   faArrowRightToBracket,
   faCloudArrowUp,
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faFilm,
   faGear,
   faMagnifyingGlass,
   faPlus,
   faQuestionCircle,
   faSpinner,
   faUser
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import avatarIcon from '~/assets/images/User_Avatar.png';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import image from '~/assets/images';
import AccountItems from '~/components/AccountItems';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import MenuItem from '~/components/Popper/Menu/MenuItems';

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
   const [searchResult, setSearchResult] = useState([]);
   const currentUser = true;

   const handleMenuChange = (MenuItem) => console.log(MenuItem);
   useEffect(() => {}, []);

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
         separate: true
      },
   ];
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('site-logo')} href="#">
               <img src={image.logo} alt="logo" />
            </div>

            <HeadlessTippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input
                     type="text"
                     className={cx('search-input')}
                     placeholder="Search account or video"
                     spellCheck="false"
                  />
                  <div className={cx('clear-btn')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </div>
                  <div className={cx('loading')}>
                     <FontAwesomeIcon icon={faSpinner} />
                  </div>
                  <button className={cx('search-button')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </HeadlessTippy>

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
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <img className={cx('user-avatar')} src={avatarIcon} alt="img" />
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
