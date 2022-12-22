import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import image from '~/assets/images';
import styles from './Header.module.scss';
import AccountItems from '~/components/AccountItems';

const cx = classNames.bind(styles);

function Header() {
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {

   }, []);
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('site-logo')} href="#">
               <img src={image.logo} alt="logo" />
            </div>

            <Tippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
						<h4 className={cx('search-title')}>
							Account
						</h4>
						<AccountItems/>
						<AccountItems/>
						<AccountItems/>
					 </PopperWrapper>
                  </div>
               )}
            >
               {/* <div className={cx('search-box')}> */}
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
               {/* </div> */}
            </Tippy>

            <div className={cx('acion')}>
               <button className={cx('upload')}>
                  <FontAwesomeIcon icon={faPlus} />
                  Upload
               </button>
               <button className={cx('login-btn')}>Log in</button>
               <button className={cx('more')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
               </button>
            </div>
         </div>
      </header>
   );
}

export default Header;
