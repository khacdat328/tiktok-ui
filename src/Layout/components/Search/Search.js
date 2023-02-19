import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '~/apiServices/searchService';
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

   const debouncedValue = useDebounce(searchValue, 500);

   const inputRef = useRef();

   useEffect(() => {
      if (!debouncedValue.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);
         const result = await searchServices.search(debouncedValue);
         setSearchResult(result);
         setLoading(false);
      };

      fetchApi();
   }, [debouncedValue]);

   const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => setShowResult(false);

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(e.target.value);
      }
   };

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   // };

   return (
      <div>
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
                  placeholder="Search accounts and video"
                  spellCheck="false"
                  onChange={handleChange}
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
               <button className={cx('search-button')} onMouseDown={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} fill="currentColor" />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
