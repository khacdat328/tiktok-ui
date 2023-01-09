import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const debounced = useDebounce(searchValue, 500);

   const inputRef = useRef();
   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([]);
         return;
      }

      setLoading(true);

      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
         .then((res) => res.json())
         .then((res) => {
            setSearchResult(res.data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [debounced]);

   const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => setShowResult(false);
   return (
      <HeadlessTippy
         interactive
         visible={showResult && searchResult.length > 0}
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Account</h4>
                  {searchResult.map((result) => (
                     <AccountItems key={result.id} data={result} />
                  ))}
               </PopperWrapper>
            </div>
         )}
         onClickOutside={handleHideResult}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               type="text"
               value={searchValue}
               className={cx('search-input')}
               placeholder="Search account or video"
               spellCheck="false"
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
               <button className={cx('clear-btn')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            {loading && (
               <div className={cx('loading')}>
                  <FontAwesomeIcon icon={faSpinner} className={cx('fa-spin')} />
               </div>
            )}
            <button className={cx('search-button')}>
               <FontAwesomeIcon icon={faMagnifyingGlass} fill="currentColor" />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
