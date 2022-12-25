import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItems';
import styles from './Menu.module.scss';
import Header from './Header';
const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange }) {
   const [history, setHistory] = useState([{ data: items }]);
   const currentMenu = history[history.length - 1];

   const renderItems = () => {
      return currentMenu.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };
   return (
      <Tippy
         delay={[0, 400]}
         interactive
         arrow={true}
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-popper')}>
                  {history.length > 1 && (
                     <Header
                        title="Language"
                        onBack={() => {
                           setHistory((prev) => prev.slice(0, prev.length - 1));
                        }}
                     />
                  )}
                  {renderItems()}
               </PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
